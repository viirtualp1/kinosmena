import { setDebug } from '@tma.js/sdk'
import { SDKProvider } from '@tma.js/sdk-react'
import type { FC } from 'react'
import { useEffect } from 'react'

import { App } from '../App'
import { MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'

export const Root: FC = () => {
  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    setDebug(true)
  }, [])

  return (
    <SDKProvider options={{ acceptCustomStyles: true, cssVars: true }}>
      <MantineProvider>
        <DatesProvider
          settings={{
            locale: 'ru',
            firstDayOfWeek: 0,
            weekendDays: [0],
            timezone: 'UTC',
          }}
        >
          <App />
        </DatesProvider>
      </MantineProvider>
    </SDKProvider>
  )
}
