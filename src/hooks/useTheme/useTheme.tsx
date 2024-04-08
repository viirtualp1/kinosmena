import { useEffect } from 'react'
import { useMiniApp } from '@tma.js/sdk-react'

export function useTheme() {
  const miniApp = useMiniApp()

  useEffect(() => {
    miniApp.ready()

    const theme = miniApp.isDark ? 'dark' : 'light'

    document
      .querySelector('html')
      ?.setAttribute('data-mantine-color-scheme', theme)
  }, [miniApp])
}
