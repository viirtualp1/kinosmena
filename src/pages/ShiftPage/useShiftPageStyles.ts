import { CSSProperties } from 'react'
import { CardStylesNames } from '@mantine/core'

export function useShiftPageStyles() {
  const cardStyles: Partial<Record<CardStylesNames, CSSProperties>> = {
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
