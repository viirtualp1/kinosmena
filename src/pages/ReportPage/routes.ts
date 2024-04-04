import { RouteObject } from 'react-router-dom'
import { ReportPage } from '.'

export function getReportRoutes(): RouteObject[] {
  return [
    {
      path: '/report/:id',
      Component: ReportPage,
    },
  ]
}
