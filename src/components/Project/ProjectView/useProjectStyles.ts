import { ButtonStylesNames, CardStylesNames } from '@mantine/core'
import { MantineStylesType } from '@/types'

export function useProjectStyles() {
  const shiftButtonStyles: MantineStylesType<ButtonStylesNames> = {
    inner: {
      display: 'grid',
      gridTemplateColumns: '1fr 24px',
    },
    label: {
      justifySelf: 'center',
    },
    section: {
      marginInlineStart: 0,
    },
  }

  const shiftCardStyles: MantineStylesType<CardStylesNames> = {
    root: {
      justifyContent: 'flex-end',
      gap: 8,
      borderColor: '#060B18',
    },
  }

  return {
    shiftButtonStyles,
    shiftCardStyles,
  }
}
