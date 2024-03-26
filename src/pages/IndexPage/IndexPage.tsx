import { useRef, type FC } from 'react'
import { Container } from '@mantine/core'
import { Link } from 'react-router-dom'

import './IndexPage.scss'

export const IndexPage: FC = () => {
  const testId = useRef(0)
  const testProjectId = useRef(1)

  return (
    <Container mt="24px">
      <Link to={`/shift/${testId.current}?projectId=${testProjectId.current}`}>
        Shift Page
      </Link>
    </Container>
  )
}
