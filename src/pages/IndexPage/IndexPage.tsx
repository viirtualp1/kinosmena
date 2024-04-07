import { useNavigate } from 'react-router-dom'
import { FC, CSSProperties, useRef, useState, useEffect } from 'react'
import { Container, Group, Text, Button, Box } from '@mantine/core'
import { useFetch } from '@/hooks/useFetch'
import { useTheme } from '@/hooks/useTheme'
import type { ProjectData } from '@/types/Project.d.ts'
import {
  ProjectIcon,
  ReportIcon,
  ArchiveIcon,
  UserDefaultIcon,
  ArrowIcon,
} from '@/components/Icons'

const labelStyles: CSSProperties = {
  whiteSpace: 'wrap',
  textAlign: 'left',
  maxWidth: 76,
  fontWeight: 500,
  lineHeight: 1.55,
  fontSize: 15,
}

const iconStyles: CSSProperties = {
  fill: '#fff',
}

export const IndexPage: FC = () => {
  useTheme()
  const navigate = useNavigate()

  const user = useRef({
    firstName: 'Admin',
    lastName: 'Kinosmena',
    hasProjects: true,
  })

  const [fullName, setFullName] = useState('Личный кабинет')
  const { data: projects } = useFetch<ProjectData[]>('/projects', {
    withRedirect: false,
  })

  useEffect(() => {
    if (!user.current) {
      return
    }

    const { firstName, lastName } = user.current

    if (!firstName) {
      return
    }

    if (!lastName) {
      setFullName(firstName)

      return
    }

    return setFullName(`${firstName} ${lastName}`)
  }, [])

  return (
    <Container px="24px" mt="24px">
      <Group gap={8} mb="24px">
        <UserDefaultIcon width={32} height={32} />
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
              root: { paddingInline: '24px' },
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
              root: { paddingInline: '24px' },
              inner: { justifyContent: 'space-between', gap: '4px' },
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
            root: { paddingInline: '24px' },
            inner: {
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              minHeight: '116px',
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

      <Button onClick={() => navigate('/shift/create')}>Шифт</Button>

      <Text my="24px">Активные проекты</Text>
      {user.current.hasProjects ? (
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

          {/* Здесь могут быть компоненты для отображения активных проектов */}
        </Box>
      ) : (
        <Text c="#060B18" opacity={0.7}>
          Здесь пока пусто, создайте проект
        </Text>
      )}
    </Container>
  )
}
