import { useNavigate } from 'react-router-dom'
import { FC, useRef } from 'react'
import { Container, Group, Text, Button, Box, Image } from '@mantine/core'
import { useInitData } from '@tma.js/sdk-react'
import type { ProjectData } from '@/types/Project.d.ts'
import { useFetch } from '@/hooks/useFetch'
import { useTheme } from '@/hooks/useTheme'
import { useFullName } from '@/hooks/useFullName'
import { useTelegramInfo } from '@/hooks/useTelegramInfo'
import { useColors } from '@/hooks/useColors'
import {
  ProjectIcon,
  ReportIcon,
  ArchiveIcon,
  UserDefaultIcon,
  ArrowIcon,
} from '@/components/Icons'
import { useIndexPageStyles } from './useIndexPageStyles.ts'

export const IndexPage: FC = () => {
  useTheme()
  useTelegramInfo()

  const navigate = useNavigate()
  const initData = useInitData()
  const { subtitleTextColor } = useColors()

  const {
    iconStyles,
    reportButtonStyles,
    buttonDefaultStyles,
    archiveButtonStyles,
    projectButtonStyles,
  } = useIndexPageStyles()

  const user = useRef({
    firstName: initData?.user?.firstName,
    lastName: initData?.user?.lastName,
    username: initData?.user?.username,
    avatar: initData?.user?.photoUrl,
  })

  const { fullName } = useFullName({
    firstName: user.current.firstName,
    lastName: user.current.lastName,
    username: user.current.username,
  })

  const { data: projects } = useFetch<ProjectData[]>('/projects', {
    withRedirect: false,
  })

  return (
    <Container px={24} mt={24}>
      <Group gap={8} mb={24}>
        {user.current.avatar ? (
          <Image src={user.current.avatar} width={32} height={32} />
        ) : (
          <UserDefaultIcon width={32} height={32} />
        )}

        <Text fw={500}>{fullName}</Text>
      </Group>

      <Group gap={8} wrap="nowrap">
        <Box w="50%" flex="0 0 50%">
          <Button
            w="100%"
            h={82}
            mb={8}
            radius={24}
            rightSection={<ProjectIcon style={iconStyles} />}
            styles={buttonDefaultStyles}
            onClick={() => navigate('/project/create')}
          >
            Создать проект
          </Button>
          <Button
            variant="dark"
            w="100%"
            h={82}
            radius={24}
            rightSection={<ArchiveIcon style={iconStyles} />}
            styles={archiveButtonStyles}
            onClick={() => navigate('/archive')}
          >
            Архивные проекты
          </Button>
        </Box>
        <Button
          variant="dark"
          w="100%"
          h="100%"
          miw={144}
          mih={172}
          radius={24}
          styles={reportButtonStyles}
          rightSection={<ReportIcon style={iconStyles} />}
          onClick={() => navigate('/report')}
        >
          Получить отчет
        </Button>
      </Group>
      <Button
        variant="dark"
        w="100%"
        h={82}
        radius={24}
        rightSection={<ReportIcon style={iconStyles} />}
        styles={archiveButtonStyles}
        onClick={() => navigate('/shift/create')}
      >
        Форма смены
      </Button>

      <Text my={24}>Активные проекты</Text>
      {projects && projects.length > 0 ? (
        <Box>
          {projects &&
            projects.length > 0 &&
            projects.map((project, idx) => (
              <Button
                key={idx}
                w="100%"
                h={48}
                variant="dark"
                mb={12}
                radius={16}
                styles={projectButtonStyles}
                rightSection={<ArrowIcon style={iconStyles} />}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                {project.name}
              </Button>
            ))}
        </Box>
      ) : (
        <Text c={subtitleTextColor} fz={14}>
          Здесь пока пусто, создайте проект
        </Text>
      )}
    </Container>
  )
}
