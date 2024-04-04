import React from 'react'
import ReactDOM from 'react-dom/client'

import { Root } from '@/components/Root'

import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import './assets/scss/globals.scss'
import 'swiper/css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
