import { RouteObject } from 'react-router-dom'
import { ProjectPage } from '.'

export function getProjectRoutes(): RouteObject[] {
  return [
    {
      path: '/project/:id',
      Component: () => ProjectPage({ isView: true }),
    },
    {
      path: '/project/:id/update',
      Component: () => ProjectPage({ isEditing: true }),
    },
    {
      path: '/project/create',
      Component: () => ProjectPage({ isCreating: true }),
    },
  ]
}
