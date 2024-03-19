import type { ComponentType } from 'react'

import { ShiftPage } from '@/pages/ShiftPage'
import { IndexPage } from '@/pages/IndexPage'

interface Route {
  path: string
  Component: ComponentType
  title?: string
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/shift', Component: ShiftPage, title: 'Создание смены' },
]
