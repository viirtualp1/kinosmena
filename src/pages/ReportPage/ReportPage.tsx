import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectName } from '@/components/Project/ProjectName/ProjectName.tsx'
import { ProjectData } from '@/types/Project'
import { useDate } from '@/hooks/useDate'
import { Container, Card, Text, Group, Button } from '@mantine/core'
import { getProjectData } from '../ProjectPage'

const shiftCardStyles = {
  root: {
    justifyContent: 'flex-end',
    borderColor: '#060B18',
  },
}

export const ReportPage: FC = () => {
  const navigate = useNavigate()
  const { formatDate } = useDate()
  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)
  const [project, setProject] = useState<ProjectData | null>(null)

  useEffect(() => {
    const projectData = getProjectData()
    setProject(projectData)
  }, [])

  useEffect(() => {
    if (project && project.start_date && project.end_date) {
      setStartDate(formatDate(project.start_date) || '')
      setEndDate(formatDate(project.end_date) || '')
    }
  }, [formatDate, project])
  return (
    <div className="report-page">
      <Container>
        Report page
        <ProjectName name="Мой проект" />
        <Card
          padding="12px 8px"
          h={66}
          withBorder
          styles={shiftCardStyles}
          ta="center"
          mb="24px"
        >
          <Text>Период отчета</Text>
          <Group justify="center">
            {startDate && (
              <Card padding="0px 8px" h={17}>
                <Text h={17} fz={14} opacity={0.7}>
                  {startDate}
                </Text>
              </Card>
            )}
            <Card padding="0px 0px" h={17}>
              <Text h={17} fz={14} opacity={0.7}>
                &mdash;
              </Text>
            </Card>
            {endDate && (
              <Card padding="0px 8px" h={17}>
                <Text h={17} fz={14} opacity={0.7}>
                  {endDate}
                </Text>
              </Card>
            )}
          </Group>
        </Card>
        <Card padding="12px" withBorder styles={shiftCardStyles} mb="24px">
          <Group justify="space-between">
            <Card miw="144px" padding="0 12px">
              <Text>Смены</Text>
            </Card>
            <Card miw="40px" padding="0 12px">
              <Text>1</Text>
            </Card>
            <Card miw="96px" padding="0 12px">
              <Text ta="right">999 999 &#x20bd;</Text>
            </Card>
          </Group>
          <Group justify="space-between">
            <Card miw="144px" padding="0 12px">
              <Text>Переработки</Text>
            </Card>
            <Card miw="40px" padding="0 12px">
              <Text>1</Text>
            </Card>
            <Card miw="96px" padding="0 12px">
              <Text ta="right">1 &#x20bd;</Text>
            </Card>
          </Group>
          <Group justify="space-between">
            <Card miw="144px" padding="0 12px">
              <Text>Недосып</Text>
            </Card>
            <Card miw="40px" padding="0 12px">
              <Text>1</Text>
            </Card>
            <Card miw="96px" padding="0 12px">
              <Text ta="right">1 &#x20bd;</Text>
            </Card>
          </Group>
          <Group justify="space-between">
            <Card miw="144px" padding="0 12px">
              <Text>Текущий обед</Text>
            </Card>
            <Card miw="40px" padding="0 12px">
              <Text>1</Text>
            </Card>
            <Card miw="96px" padding="0 12px">
              <Text ta="right">1 &#x20bd;</Text>
            </Card>
          </Group>
          <Group justify="space-between">
            <Card miw="144px" padding="0 12px">
              <Text>Поздний обед</Text>
            </Card>
            <Card miw="40px" padding="0 12px">
              <Text>1</Text>
            </Card>
            <Card miw="96px" padding="0 12px">
              <Text ta="right">1 &#x20bd;</Text>
            </Card>
          </Group>
          <Group justify="space-between">
            <Card miw="144px" padding="0 12px">
              <Text>Суточные</Text>
            </Card>
            <Card miw="40px" padding="0 12px">
              <Text>1</Text>
            </Card>
            <Card miw="96px" padding="0 12px">
              <Text ta="right">1 &#x20bd;</Text>
            </Card>
          </Group>
          <Group justify="space-between">
            <Card miw="144px" padding="0 12px">
              <Text>Доп. услуги</Text>
            </Card>
            <Card miw="40px" padding="0 12px">
              <Text>1</Text>
            </Card>
            <Card miw="96px" padding="0 12px">
              <Text ta="right">1 &#x20bd;</Text>
            </Card>
          </Group>
        </Card>
        <Card miw="96px" padding="0 0px" mb="24px">
          <Group justify="end">
            <Card padding="0 0px">
              <Text>Итоговая сумма</Text>
            </Card>
            <Card
              mih="33px"
              miw="37px"
              bg="rgb(5, 148, 250)"
              padding="8px"
              ml="8px"
            >
              <Text lh="1">1 &#x20bd;</Text>
            </Card>
          </Group>
        </Card>
        <Button
        variant="dark"
          p="12px"
          ta="center"
          w="100%"
          c="#fff"
          h="41"                    
          mb="24px"
          fz={14}
          onClick={() => navigate('../')}
        >
          На главную страницу
        </Button>
      </Container>
    </div>
  )
}
