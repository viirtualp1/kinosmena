import React from 'react'
import ReactDOM from 'react-dom/client'

import { Root } from '@/components/Root'

import './assets/scss/globals.scss'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
