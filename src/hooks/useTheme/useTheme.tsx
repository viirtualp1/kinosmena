import { useEffect } from 'react'
import { useMiniApp } from '@tma.js/sdk-react'

export function useTheme() {
  const miniApp = useMiniApp()

  useEffect(() => {
    miniApp.ready()

    if (miniApp.isDark) {
      document
        .querySelector('html')
        ?.setAttribute('data-mantine-color-scheme', 'dark')
    }
  }, [miniApp])
}
