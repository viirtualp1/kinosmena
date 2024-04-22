import { MantineStylesType } from '@/types'
import { ButtonStylesNames } from '@mantine/core'

export function useProjectIndicatorsStyles() {
  const buttonStyles: MantineStylesType<ButtonStylesNames> = {
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

  const boxStyles: MantineStylesType<any> = {
    padding: '8px 12px',
    border: '1px solid rgb(6, 11, 24)',
    borderRadius: '12px',
  }

  return {
    buttonStyles,
    boxStyles,
  }
}
