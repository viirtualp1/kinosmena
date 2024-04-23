import { useThemeParams } from '@tma.js/sdk-react'

export function useColors() {
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
    isDark,
    linkColor,
  } = useThemeParams()

  return {
    accentTextColor: accentTextColor || '#0594FA',
    backgroundColor: backgroundColor || '#fff',
    headerBackgroundColor,
    buttonColor,
    buttonTextColor,
    textColor,
    subtitleTextColor,
    sectionHeaderTextColor,
    sectionBackgroundColor,
    secondaryBackgroundColor,
    destructiveTextColor,
    isDark,
    linkColor,
  }
}
