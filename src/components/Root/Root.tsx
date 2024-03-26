import type { FC } from 'react'
import { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { setDebug } from '@tma.js/sdk'
import { SDKProvider } from '@tma.js/sdk-react'
import { createTheme, Input, MantineProvider, TextInput } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'

import { IndexPage } from '@/pages/IndexPage'

import inputClasses from '@/assets/scss/vendors/_input.module.scss'
import { getShiftRoutes } from '@/pages/ShiftPage/routes'

const router = createBrowserRouter([
  {
    path: '/',
    Component: IndexPage,
  },
  ...getShiftRoutes(),
])

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: inputClasses }),
    TextInput: TextInput.extend({ classNames: inputClasses }),
  },
})

export const Root: FC = () => {
  useEffect(() => {
    setDebug(true)
  }, [])

  return (
    <SDKProvider options={{ acceptCustomStyles: true, cssVars: true }}>
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
    </SDKProvider>
  )
}
