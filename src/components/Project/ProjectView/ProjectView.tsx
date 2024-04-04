import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Box, Button, Card, Group, Text } from '@mantine/core'
import { ProjectData, ShiftShortData } from '@/types/Project'
import { useDate } from '@/hooks/useDate'
import { PlusIcon, CloseIcon } from '@/components/Icons'
import { ProjectName } from '@/components/Project/ProjectName'
import { ShiftCard } from '@/components/Project/ShiftCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme/useTheme.tsx'

interface Props {
  project: ProjectData
}

const shiftButtonStyles = {
  label: {
    marginLeft: '50%',
    translate: '-50%',
  },
  rightSection: {
    marginLeft: '100%',
    translate: '-100%',
  },
}

const shiftCardStyles = {
  root: {
    justifyContent: 'flex-end',
    gap: 8,
    borderColor: '#060B18',
  },
}

export const ProjectView: FC<Props> = ({ project }) => {
  useTheme()
  const { formatDate } = useDate()
  const navigate = useNavigate()

  const firstShift = useRef<ShiftShortData | undefined>(project.shifts[0])
  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)

  useEffect(() => {
    setStartDate(formatDate(project.start_date) || null)
    setEndDate(formatDate(project.end_date) || null)
  }, [formatDate, project])

  const ShiftRightSection = useMemo(
    () => (firstShift.current ? <CloseIcon /> : <PlusIcon />),
    [firstShift],
  )

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
          rightSection={ShiftRightSection}
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
        {startDate && (
          <Card padding="12px 8px" h={66} withBorder styles={shiftCardStyles}>
            <Text h={17} fz={14}>
              Дата начала
            </Text>
            <Text h={17} fz={14} opacity={0.7}>
              {startDate}
            </Text>
          </Card>
        )}

        {endDate && (
          <Card padding="12px 20px" h={66} withBorder styles={shiftCardStyles}>
            <Text h={17} fz={14}>
              Дата окончания
            </Text>
            <Text h={17} fz={14} opacity={0.7}>
              {endDate}
            </Text>
          </Card>
        )}
      </Group>
    </>
  )
}
