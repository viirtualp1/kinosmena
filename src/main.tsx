import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import { generateColors } from '@mantine/colors-generator'
import App from './App.tsx'
import 'dayjs/locale/ru'
import './assets/scss/globals.scss'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'

const { themeParams } = window.Telegram.WebApp

const theme = createTheme({
  primaryColor: 'blue',
  black: themeParams.text_color || '#000',
  colors: {
    blue: generateColors(themeParams.button_color || '#339AF0'),
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
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
