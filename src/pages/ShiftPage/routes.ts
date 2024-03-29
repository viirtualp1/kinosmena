import { RouteObject } from 'react-router-dom'
import { ShiftPage } from '.'

export function getShiftRoutes(): RouteObject[] {
  return [
    {
      path: '/shift/:id',
      Component: () => ShiftPage({ isView: true }),
    },
    {
      path: '/shift/:id/update',
      Component: () => ShiftPage({ isEditing: true }),
    },
    {
      path: '/shift/create',
      Component: () => ShiftPage({ isCreating: true }),
    },
  ]
}
