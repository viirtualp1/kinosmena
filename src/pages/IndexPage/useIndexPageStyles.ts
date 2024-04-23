import { CSSProperties } from 'react'
import { MantineStylesType } from '@/types'
import { ButtonStylesNames } from '@mantine/core'

export function useIndexPageStyles() {
  const labelStyles: CSSProperties = {
    whiteSpace: 'wrap',
    textAlign: 'left',
    maxWidth: 76,
    fontWeight: 500,
    lineHeight: 1.55,
    fontSize: 15,
  }

  const iconStyles: CSSProperties = {
    fill: '#fff',
  }

  const buttonDefaultStyles: MantineStylesType<ButtonStylesNames> = {
    root: {
      paddingInline: 24,
    },
    inner: {
      justifyContent: 'space-between',
    },
    label: labelStyles,
  }

  const archiveButtonStyles: MantineStylesType<ButtonStylesNames> = {
    ...buttonDefaultStyles,
    inner: {
      ...buttonDefaultStyles.inner,
      gap: 4,
    },
  }

  const reportButtonStyles: MantineStylesType<ButtonStylesNames> = {
    root: buttonDefaultStyles.root,
    inner: {
      ...buttonDefaultStyles.inner,
      flexDirection: 'column',
      alignItems: 'flex-start',
      minHeight: 116,
    },
    section: {
      alignSelf: 'flex-end',
    },
    label: {
      ...buttonDefaultStyles.label,
      maxWidth: 96,
    },
  }

  const projectButtonStyles: MantineStylesType<ButtonStylesNames> = {
    inner: {
      justifyContent: 'space-between',
    },
    label: {
      ...labelStyles,
      maxWidth: 'none',
    },
  }

  return {
    labelStyles,
    iconStyles,
    archiveButtonStyles,
    buttonDefaultStyles,
    reportButtonStyles,
    projectButtonStyles,
  }
}
