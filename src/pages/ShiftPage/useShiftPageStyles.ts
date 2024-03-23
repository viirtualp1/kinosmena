import { CardStylesNames } from '@mantine/core'
import { MantineStylesType } from '@/types'

export function useShiftPageStyles() {
  const cardStyles: MantineStylesType<CardStylesNames> = {
    root: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '14px',
      color: '#fff',
    },
  }

  return {
    cardStyles,
  }
}
