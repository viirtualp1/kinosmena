import { FC, CSSProperties, useRef, useState, useEffect } from 'react'
import { Container, Group, Image, Text, Button, Box } from '@mantine/core'

import {
  ProjectIcon,
  ReportIcon,
  ArchiveIcon,
  UserDefaultIcon,
} from '@/components/Icons'
import { getProjects } from './mock'

export const IndexPage: FC = () => {
  const user = useRef({
    firstName: 'Admin',
    lastName: 'Kinosmena',
    hasProjects: true,
  })

  const [fullName, setFullName] = useState('Пользователь')
  const [projects] = useState(getProjects())

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

  const labelStyles: CSSProperties = {
    whiteSpace: 'wrap',
    textAlign: 'left',
  }

  return (
    <Container px="24px" mt="24px">
      <Group grow mb="24px">
        <Image src={UserDefaultIcon} alt="User Icon" maw={32} />
        <Text>{fullName}</Text>
      </Group>

      <Group gap="8px" wrap="nowrap">
        <Box w="50%" flex="0 0 50%">
          <Button
            bg="#0594FA"
            w="100%"
            h={82}
            mb={8}
            radius="24px"
            rightSection={<ProjectIcon />}
            styles={{
              root: { paddingInline: '24px' },
              inner: { justifyContent: 'space-between' },
              label: labelStyles,
            }}
            onClick={() => console.log('Button 1 clicked')}
          >
            <Text maw={76} fw={500}>
              Создать проект
            </Text>
          </Button>
          <Button
            bg="#363A43"
            w="100%"
            h={82}
            radius="24px"
            rightSection={<ArchiveIcon />}
            styles={{
              root: { paddingInline: '24px' },
              inner: { justifyContent: 'space-between', gap: '4px' },
              label: labelStyles,
            }}
            onClick={() => console.log('Button 2 clicked')}
          >
            <Text maw={76} fw={500}>
              Архивные проекты
            </Text>
          </Button>
        </Box>
        <Button
          bg="#363A43"
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
            label: labelStyles,
          }}
          rightSection={<ReportIcon />}
          onClick={() => console.log('Button 3 clicked')}
        >
          <Text maw={96}>Получить отчет</Text>
        </Button>
      </Group>

      <Text my="24px">Активные проекты</Text>
      {user.current.hasProjects ? (
        <Box>
          {projects.map((project, idx) => (
            <Button
              key={idx}
              w="100%"
              h="48px"
              bg="#363A43"
              mb={12}
              radius="16px"
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
