import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Box, Button, Card, Group, Text } from '@mantine/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom'
import { ProjectData, ShiftShortData } from '@/types/Project'
import { useDate } from '@/hooks/useDate'
import { useTheme } from '@/hooks/useTheme'
import { useProjectIndicators } from '@/hooks/useProjectIndicators'
import { useConfig } from '@/hooks/useConfig'
import { PlusIcon, CloseIcon } from '@/components/Icons'
import { ProjectName } from '@/components/Project/ProjectName'
import { ShiftCard } from '@/components/Project/ShiftCard'
import { ProjectCalculatedIndicators } from '../ProjectCalculatedIndicators'
import { useProjectStyles } from './useProjectStyles.ts'

interface Props {
  project: ProjectData
}

export const ProjectView: FC<Props> = ({ project }) => {
  const { isDev } = useConfig()
  !isDev && useTheme()

  const navigate = useNavigate()
  const { formatDate } = useDate()

  const { indicators } = useProjectIndicators()
  const { shiftButtonStyles, shiftCardStyles } = useProjectStyles()

  const firstShift = useRef<ShiftShortData | null>(project.shifts[0] || null)
  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)

  useEffect(() => {
    setStartDate(formatDate(project.start_date) || null)
    setEndDate(formatDate(project.end_date) || null)
  }, [formatDate, project])

  const ShiftRightSection = useMemo(
    () => (firstShift.current ? CloseIcon : PlusIcon),
    [firstShift],
  )

  const Date = ({ name, date }: { name: string; date: string }) => {
    return (
      <Card padding="12px 8px" h={66} withBorder styles={shiftCardStyles}>
        <Text h={17} fz={14}>
          {name}
        </Text>
        <Text h={17} fz={14} opacity={0.7}>
          {date}
        </Text>
      </Card>
    )
  }

  return (
    <>
      <Box mb={24}>
        <Swiper
          spaceBetween={8}
          slidesPerView={4.2}
          breakpoints={{
            320: { slidesPerView: 3.5 },
            400: { slidesPerView: 4.2 },
            600: { slidesPerView: 5.5 },
          }}
        >
          {project.shifts.map((shift, idx) => (
            <SwiperSlide
              key={idx}
              onClick={() => navigate(`/shift/${shift.id}`)}
            >
              <ShiftCard shift={shift} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {firstShift.current && (
        <Button
          fullWidth
          h={48}
          mb="24px"
          rightSection={<ShiftRightSection style={{ fill: '#fff' }} />}
          styles={shiftButtonStyles}
          justify="space-between"
        >
          {firstShift.current ? 'Закрыть смену' : 'Открыть смену'}
        </Button>
      )}

      <ProjectName name={project.name} />

      <Card
        shadow="sm"
        padding="12px"
        bg="#363A43"
        withBorder
        mb="24px"
        c="#fff"
        fz={12}
        mih={100}
      >
        {project.description}
      </Card>

      <Group grow gap="8px" ta="center" mb="24px">
        {startDate && <Date name="Дата начала" date={startDate} />}

        {endDate && <Date name="Дата окончания" date={endDate} />}
      </Group>

      <ProjectCalculatedIndicators indicators={indicators} readonly />
    </>
  )
}
