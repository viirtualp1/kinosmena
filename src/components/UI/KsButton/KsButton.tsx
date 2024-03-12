import { useEffect, useState } from 'react'
import './KsButton.scss'

type ButtonTheme = 'accent' | 'secondary'

type ButtonSize = 'small' | 'medium' | 'large'

interface Props {
  text: string
  theme?: ButtonTheme
  size?: ButtonSize
  block?: boolean
  className?: string
  onClick?: () => void
}

export function KsButton(props: Props) {
  const [classes, setClasses] = useState('')

  const { text, theme, size, className, block, onClick } = props

  useEffect(() => {
    setClasses(`ks-button ${theme} is-${size} ${block && 'block'}`)
  }, [theme, size, block, className])

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  )
}
