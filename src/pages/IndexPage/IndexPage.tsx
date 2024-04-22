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

  const { labelStyles, iconStyles } = useIndexPageStyles()

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
    <Container px="24px" mt="24px">
      <Group gap={8} mb="24px">
        {user.current.avatar ? (
          <Image src={user.current.avatar} width={32} height={32} />
        ) : (
          <UserDefaultIcon width={32} height={32} />
        )}

        <Text fw={500}>{fullName}</Text>
      </Group>

      <Group gap="8px" wrap="nowrap">
        <Box w="50%" flex="0 0 50%">
          <Button
            w="100%"
            h={82}
            mb={8}
            radius="24px"
            rightSection={<ProjectIcon style={iconStyles} />}
            styles={{
              root: { paddingInline: 24 },
              inner: { justifyContent: 'space-between' },
              label: labelStyles,
            }}
            onClick={() => navigate('/project/create')}
          >
            Создать проект
          </Button>
          <Button
            variant="dark"
            w="100%"
            h={82}
            radius="24px"
            rightSection={<ArchiveIcon style={iconStyles} />}
            styles={{
              root: { paddingInline: 24 },
              inner: { justifyContent: 'space-between', gap: 4 },
              label: labelStyles,
            }}
            onClick={() => navigate('/archive')}
          >
            Архивные проекты
          </Button>
        </Box>
        <Button
          variant="dark"
          w="100%"
          h="100%"
          miw="144px"
          mih="172px"
          radius="24px"
          styles={{
            root: { paddingInline: 24 },
            inner: {
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              minHeight: 116,
            },
            section: {
              alignSelf: 'flex-end',
            },
            label: { ...labelStyles, maxWidth: 96 },
          }}
          rightSection={<ReportIcon style={iconStyles} />}
          onClick={() => navigate('/report')}
        >
          Получить отчет
        </Button>
      </Group>

      <Text my="24px">Активные проекты</Text>
      {projects && projects.length > 0 ? (
        <Box>
          {projects &&
            projects.length > 0 &&
            projects.map((project, idx) => (
              <Button
                key={idx}
                w="100%"
                h="48px"
                variant="dark"
                mb={12}
                radius="16px"
                styles={{
                  inner: {
                    justifyContent: 'space-between',
                  },
                  label: { ...labelStyles, maxWidth: 'none' },
                }}
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
