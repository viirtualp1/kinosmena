import { FC, useEffect, useState } from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import {
  Button,
  Container,
  ContainerStylesNames,
  Image,
  Text,
  Title,
} from '@mantine/core'
import { MantineStylesType } from '@/types'
import SpaceshipIcon from '@/assets/images/spaceship.png'

interface ErrorData {
  data: string
  error: {
    message: string
    stack: string
  }
  internal: boolean
  status: number
  statusText: string
}

const containerStyles: MantineStylesType<ContainerStylesNames> = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
}

export const ErrorPage: FC = () => {
  const error = useRouteError() as ErrorData
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState(
    'Упс! Что-то сломалось, но мы уже чиним.',
  )

  useEffect(() => {
    if (error.status !== 404) {
      return
    }

    setErrorMessage('Страница не найдена')
  }, [error])

  return (
    <Container role="alert" styles={containerStyles}>
      <Image src={SpaceshipIcon} w={128} />

      <Title order={1} mt={24} mb={12}>
        Ошибка {error.status || 503}
      </Title>
      <Text mb={24}>{errorMessage}</Text>

      <Button onClick={() => navigate('/')} size="lg" radius="md">
        На главную
      </Button>
    </Container>
  )
}
