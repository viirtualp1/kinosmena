import type { FC } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { setDebug } from '@tma.js/sdk'
import { SDKProvider } from '@tma.js/sdk-react'
import { MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import { RequestProvider } from '@axios-use/react'

import { App } from '../App'

export const Root: FC = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://rbychin.ddns.net:6080/api/',
  })

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    setDebug(true)
  }, [])

  return (
    <SDKProvider options={{ acceptCustomStyles: true, cssVars: true }}>
      <RequestProvider instance={axiosInstance}>
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
      </RequestProvider>
    </SDKProvider>
  )
}
