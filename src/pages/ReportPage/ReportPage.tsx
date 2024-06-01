import { FC, useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectName } from '@/components/Project/ProjectName/ProjectName'
import { useDate } from '@/hooks/useDate'
import { Container, Card, Text, Group, Button } from '@mantine/core'
import { ShiftData } from '@/types/Shift'
import { useFetch } from '@/hooks/useFetch'
import { ProjectData } from '@/types/Project'

const сardStyles = {
  root: {
    justifyContent: 'flex-end',
    borderColor: '#060B18',
  },
}
interface ReportIndicatorData {
  name: string
  value: number
  totalValue: number
}

export const ReportPage: FC = () => {
  const reportIndicators = useRef<ReportIndicatorData[]>([
    { name: 'Смены', value: 1, totalValue: 999999 },
    { name: 'Переработки', value: 1, totalValue: 1 },
    { name: 'Недосып', value: 1, totalValue: 1 },
    { name: 'Текущий обед', value: 1, totalValue: 1 },
    { name: 'Поздний обед', value: 1, totalValue: 1 },
    { name: 'Суточные', value: 1, totalValue: 1 },
    { name: 'Доп. услуги', value: 1, totalValue: 1 },
  ])

  const navigate = useNavigate()
  const { formatDate } = useDate()
  const [startDate, setStartDate] = useState<string | undefined>(undefined)
  const [endDate, setEndDate] = useState<string | undefined>(undefined)
  const { id } = useParams()
  const { data: report, isLoading } = useFetch<ShiftData>(`/shifts/${id}`)
  const { data: project } = useFetch<ProjectData>(`/projects/${id}`)

  useEffect(() => {
    setStartDate(report?.start_date ? formatDate(report.start_date) : undefined)
    setEndDate(report?.end_date ? formatDate(report.end_date) : undefined)
  }, [report, formatDate, isLoading])
  return (
    <div className="report-page">
      <Container>
        Report page
        <ProjectName name={project?.name || 'Мой проект'} />
        <Card
          p="12px 8px"
          h={66}
          withBorder
          styles={сardStyles}
          ta="center"
          mb="24px"
        >
          <Text>Период отчета</Text>
          <Group justify="center" gap={8}>
            {startDate}
            <span>&mdash;</span>
            {endDate}
          </Group>
        </Card>
        <Card mb="24px" withBorder styles={сardStyles}>
          {reportIndicators.current.map((indicator, index) => (
            <Group key={index} justify="space-between">
              <Card miw="144px" padding="0 12px">
                <Text>{indicator.name}</Text>
              </Card>
              <Card miw="40px" padding="0 12px">
                <Text>{indicator.value}</Text>
              </Card>
              <Card miw="96px" padding="0 12px">
                <Text ta="right">{indicator.totalValue} &#x20bd;</Text>
              </Card>
            </Group>
          ))}
        </Card>
        <Card miw="96px" p="0" mb="24px">
          <Group justify="end">
            <Card p="0">
              <Text fw="500">Итоговая сумма</Text>
            </Card>
            <Card mih="33px" miw="37px" bg="rgb(5, 148, 250)" p="8px" ml="8px">
              <Text lh="1" c="white">
                1 &#x20bd;
              </Text>
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
          onClick={() => navigate('/')}
        >
          На главную страницу
        </Button>
      </Container>
    </div>
  )
}
