import { FC } from 'react'
import { Button } from '@mantine/core'
import { useColors } from '@/hooks/useColors'

export const TelegramExampleColors: FC = () => {
  const {
    accentTextColor,
    backgroundColor,
    buttonColor,
    buttonTextColor,
    headerBackgroundColor,
    textColor,
    subtitleTextColor,
    sectionHeaderTextColor,
    sectionBackgroundColor,
    secondaryBackgroundColor,
    destructiveTextColor,
    linkColor,
  } = useColors()

  return (
    <>
      <Button bg={accentTextColor}>accent text color</Button>
      <Button bg={backgroundColor}>background color</Button>
      <Button bg={buttonColor}>button color</Button>
      <Button bg={buttonTextColor}>button text color</Button>
      <Button bg={headerBackgroundColor}>header background color</Button>
      <Button bg={textColor}>text color</Button>
      <Button bg={subtitleTextColor}>subtitle text color</Button>
      <Button bg={sectionHeaderTextColor}>section header text color</Button>
      <Button bg={sectionBackgroundColor}>section background color</Button>
      <Button bg={secondaryBackgroundColor}>secondary background color</Button>
      <Button bg={destructiveTextColor}>destructive text color</Button>
      <Button bg={linkColor}>link color</Button>
    </>
  )
}
