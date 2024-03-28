import { useRef, type FC, useState } from 'react'
import { Button, Container, Flex, Title } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'

import './IndexPage.scss'

export const IndexPage: FC = () => {
  const navigate = useNavigate()

  const testShiftId = useRef(0)
  const testProjectId = useRef(1)

  const [pages] = useState([
    [
      {
        name: 'Смена (просмотр)',
        link: `/shift/${testShiftId.current}?projectId=${testProjectId.current}`,
      },
      {
        name: 'Смена (создание)',
        link: `/shift/${testShiftId.current}/update?projectId=${testProjectId.current}`,
      },
      {
        name: 'Смена (ред)',
        link: `/shift/${testShiftId.current}?projectId=${testProjectId.current}`,
      },
    ],
    [
      {
        name: 'Проект (просмотр)',
        link: `/project/${testProjectId.current}`,
      },
      {
        name: 'Проект (создание)',
        link: `/project/create`,
      },
      {
        name: 'Проект (ред)',
        link: `/project/${testProjectId.current}/update`,
      },
    ],
  ])

  return (
    <Container mt="24px">
      <Title order={1} mb={24}>
        Kinosmena
      </Title>

      <Flex mb={14} gap={24} wrap="wrap">
        {pages.map((page, idx) => (
          <Button.Group
            orientation="vertical"
            key={idx}
            style={{ flexGrow: 1 }}
          >
            {page.map((subPage, subPageIdx) => (
              <Button
                fullWidth
                key={subPageIdx}
                size="lg"
                onClick={() => navigate(subPage.link)}
              >
                {subPage.name}
              </Button>
            ))}
          </Button.Group>
        ))}
      </Flex>
    </Container>
  )
}
