import { CardStylesNames } from '@mantine/core'
import { MantineStylesType } from '@/types'

export function useShiftFormStyles() {
  const cardStyles: MantineStylesType<CardStylesNames> = {
    root: {
      borderColor: '#060B18',
    },
  }

  return {
    cardStyles,
  }
}
