import type { FC } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { setDebug } from '@tma.js/sdk'
import { SDKProvider } from '@tma.js/sdk-react'
import { createTheme, Input, MantineProvider, TextInput } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import { RequestProvider } from '@axios-use/react'

import { IndexPage } from '@/pages/IndexPage'
import { ShiftPage } from '@/pages/ShiftPage'

import inputClasses from '@/assets/scss/vendors/_input.module.scss'

const router = createBrowserRouter([
  { path: '/', Component: IndexPage },
  { path: '/shift/:id', Component: ShiftPage },
])

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: inputClasses }),
    TextInput: TextInput.extend({ classNames: inputClasses }),
  },
})

export const Root: FC = () => {
  const axiosInstance = axios.create({
    // TODO: get base url from env
    baseURL: 'http://rbychin.ddns.net:6080/api/',
    params: {
      // TODO: get tid from TMA.js
      tid: 1,
    },
  })

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    setDebug(true)
  }, [])

  return (
    <SDKProvider options={{ acceptCustomStyles: true, cssVars: true }}>
      <RequestProvider instance={axiosInstance}>
        <MantineProvider theme={theme}>
          <DatesProvider
            settings={{
              locale: 'ru',
              firstDayOfWeek: 0,
              weekendDays: [0],
              timezone: 'UTC',
            }}
          >
            <RouterProvider router={router} />
          </DatesProvider>
        </MantineProvider>
      </RequestProvider>
    </SDKProvider>
  )
}
