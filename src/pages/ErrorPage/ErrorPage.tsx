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
import { useColors } from '@/hooks/useColors'
import './ErrorPage.scss'

import SpaceshipIcon from '@/assets/images/spaceship.svg'
import SpaceshipWhiteIcon from '@/assets/images/spaceship-white.svg'

import LoadingIcon from '@/assets/images/loading.svg'
import LoadingWhiteIcon from '@/assets/images/loading-white.svg'

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
  const { isDark } = useColors()
  const [icon, setIcon] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (error.status === 404) {
      setErrorMessage('Страница не найдена')
      setIcon(isDark ? SpaceshipWhiteIcon : SpaceshipIcon)

      return
    }

    setIcon(isDark ? LoadingWhiteIcon : LoadingIcon)
    setErrorMessage('Упс! Что-то сломалось, но мы уже чиним.')
  }, [error, isDark])

  return (
    <Container role="alert" styles={containerStyles}>
      <Image src={icon} w={128} />

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
