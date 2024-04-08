import { useEffect } from 'react'
import { useMiniApp } from '@tma.js/sdk-react'

export function useTheme() {
  const miniApp = useMiniApp()

  useEffect(() => {
    miniApp.ready()

    const theme = miniApp.isDark ? 'dark' : 'light'
    console.log(theme)

    document
      .querySelector('html')
      ?.setAttribute('data-mantine-color-scheme', theme)
  }, [miniApp, miniApp.isDark])
}
