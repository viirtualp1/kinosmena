import type { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SDKProvider } from '@tma.js/sdk-react'
import {
  createTheme,
  Input,
  MantineProvider,
  TextInput,
  Container,
  Button,
} from '@mantine/core'
import { DatesProvider } from '@mantine/dates'

import {
  getShiftRoutes,
  getProjectRoutes,
  getReportRoutes,
  getArchiveRoutes,
  IndexPage,
  ErrorPage,
} from '@/pages'

import inputClasses from '@/assets/scss/vendors/_input.module.scss'
import buttonClasses from '@/assets/scss/vendors/_button.module.scss'

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
      ...getArchiveRoutes(),
      ...getReportRoutes(),
    ],
  },
])

const theme = createTheme({
  defaultRadius: '12px',
  components: {
    Input: Input.extend({ classNames: inputClasses }),
    TextInput: TextInput.extend({ classNames: inputClasses }),
    Button: Button.extend({ classNames: buttonClasses }),
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
