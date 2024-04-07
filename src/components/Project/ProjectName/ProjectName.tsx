import { FC } from 'react'
import { Card, CardStylesNames } from '@mantine/core'
import { MantineStylesType } from '@/types'
import { BookmarkIcon } from '@/components/Icons'

export const ProjectName: FC<{ name: string }> = ({ name }) => {
  const cardStyles: MantineStylesType<CardStylesNames> = {
    root: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '14px',
      color: '#fff',
      height: 48,
    },
  }

  return (
    <Card
      shadow="sm"
      padding="12px"
      styles={cardStyles}
      bg="#363A43"
      withBorder
      mb="24px"
      fz={14}
    >
      <BookmarkIcon size={20} style={{ fill: '#fff' }} />
      {name}
    </Card>
  )
}
