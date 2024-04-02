import type { FC } from 'react'
import { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { setDebug } from '@tma.js/sdk'
import { SDKProvider } from '@tma.js/sdk-react'
import {
  createTheme,
  Input,
  MantineProvider,
  TextInput,
  Container,
} from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import { getShiftRoutes } from '@/pages/ShiftPage'
import { getProjectRoutes } from '@/pages/ProjectPage'

import { IndexPage } from '@/pages/IndexPage'
import { ErrorPage } from '@/pages/ErrorPage'

import inputClasses from '@/assets/scss/vendors/_input.module.scss'

const router = createBrowserRouter([
  {
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: '/',
        Component: IndexPage,
      },
      ...getShiftRoutes(),
      ...getProjectRoutes(),
    ],
  },
])

const theme = createTheme({
  defaultRadius: '12px',
  components: {
    Input: Input.extend({ classNames: inputClasses }),
    TextInput: TextInput.extend({ classNames: inputClasses }),
    Container: Container.extend({
      vars: () => ({
        root: {
          '--container-size': '600px',
        },
      }),
    }),
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
