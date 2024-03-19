import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import App from './App.tsx'
import 'dayjs/locale/ru'
import './assets/scss/globals.scss'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
  </React.StrictMode>,
)
