import { FC, useEffect, useRef, useState } from 'react'
import { ProjectData, ShiftShortData } from '@/types/Project'
import { ShiftCard } from '@/components/Project/ShiftCard/ShiftCard.tsx'
import { Button, Card, Group, Text } from '@mantine/core'
import { PlusIcon, CloseIcon } from '@/components/Icons'
import { ProjectName } from '@/components/Project/ProjectName'
import { useDate } from '@/hooks/useDate/useDate.ts'

interface Props {
  project: ProjectData
}

const shiftButtonStyles = {
  label: {
    marginLeft: '50%',
    translate: '-50%',
  },
  rightSection: {
    translate: '-100%',
    marginLeft: '100%',
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
  const { formatDate } = useDate()

  const firstShift = useRef<ShiftShortData | undefined>(project.shifts[0])
  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)

  useEffect(() => {
    const startDate = formatDate(project.start_date) || null
    const endDate = formatDate(project.end_date) || null

    setStartDate(startDate)
    setEndDate(endDate)
  }, [project, formatDate])

  const ShiftRightSection = firstShift.current ? <CloseIcon /> : <PlusIcon />

  return (
    <>
      <Group mb="24px">
        {project.shifts.map((shift, idx) => (
          <ShiftCard shift={shift} key={idx} />
        ))}
      </Group>

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
