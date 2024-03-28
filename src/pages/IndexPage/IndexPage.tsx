import { useRef, type FC } from 'react'
import { Container, Group } from '@mantine/core'
import { Link } from 'react-router-dom'

import './IndexPage.scss'

export const IndexPage: FC = () => {
  const testShiftId = useRef(0)
  const testProjectId = useRef(1)

  return (
    <Container mt="24px">
      <Group mb={14}>
        <Link
          to={`/shift/${testShiftId.current}?projectId=${testProjectId.current}`}
        >
          Смена (просмотр)
        </Link>
        <Link to={`/shift/create?projectId=${testProjectId.current}`}>
          Смена (создание)
        </Link>
        <Link
          to={`/shift/${testShiftId.current}/update?projectId=${testProjectId.current}`}
        >
          Смена (ред)
        </Link>
      </Group>

      <Group>
        <Link to={`/project/${testProjectId.current}`}>Проект (просмотр)</Link>
        <Link to={`/project/${testProjectId.current}/update`}>
          Проект (создание)
        </Link>
        <Link to={`/project/create`}>Проект (ред)</Link>
      </Group>
    </Container>
  )
}
