import { FC } from 'react'
import { Card, CardStylesNames } from '@mantine/core'
import { MantineStylesType } from '@/types'
import { BookmarkIcon } from '@/components/Icons'

const cardStyles: MantineStylesType<CardStylesNames> = {
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    color: '#fff',
    height: 48,
  },
}

export const ProjectName: FC<{ name: string }> = ({ name }) => {
  return (
    <Card
      shadow="sm"
      padding={12}
      styles={cardStyles}
      bg="#363A43"
      withBorder
      mb={24}
      fz={14}
    >
      <BookmarkIcon size={20} style={{ fill: '#fff' }} />
      {name}
    </Card>
  )
}
