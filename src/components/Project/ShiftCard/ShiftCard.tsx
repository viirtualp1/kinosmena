import { FC, useEffect, useState } from 'react'
import { ShiftShortData } from '@/types/Project'
import { Card, Text } from '@mantine/core'
import { CalendarIcon } from '@/components/Icons'
import { useDate } from '@/hooks/useDate'

interface Props {
  shift: ShiftShortData
}

const CardStyles = {
  root: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#363A43',
  },
}

export const ShiftCard: FC<Props> = ({ shift }) => {
  const { formatDate } = useDate()

  const [startDate, setStartDate] = useState('')
  const [color, setColor] = useState('#fff')

  useEffect(() => {
    setStartDate(formatDate(shift.start_date) || '')
    setColor(shift.is_active ? '#000' : '#fff')
  }, [shift, formatDate])

  return (
    <Card
      withBorder={shift.is_active}
      bg={shift.is_active ? 'none' : '#363A43'}
      c={color}
      w={84}
      h={76}
      styles={CardStyles}
      padding={12}
    >
      <CalendarIcon fill={color} />

      <Text fz={12}>{startDate}</Text>
    </Card>
  )
}