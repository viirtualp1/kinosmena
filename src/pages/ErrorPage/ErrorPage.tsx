import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
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

export const ErrorPage: FC = () => {
  const navigate = useNavigate()

  const containerStyles: MantineStylesType<ContainerStylesNames> = {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
    },
  }

  return (
    <Container role="alert" styles={containerStyles}>
      <Image src={SpaceshipIcon} w={128} />

      <Title order={1} mt={24} mb={12}>
        Ошибка 404
      </Title>
      <Text mb={24}>Страница не найдена</Text>

      <Button onClick={() => navigate('/')} size="lg" radius="md">
        На главную
      </Button>
    </Container>
  )
}
