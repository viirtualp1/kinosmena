import { CSSProperties } from 'react'

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

  return {
    labelStyles,
    iconStyles,
  }
}
