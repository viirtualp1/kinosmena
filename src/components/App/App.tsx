import { Navigate, Route, RouteObject, Router, Routes } from 'react-router-dom'
import {
  getShiftRoutes,
  getProjectRoutes,
  getReportRoutes,
  getArchiveRoutes,
  IndexPage,
  ErrorPage,
} from '@/pages'
import { ComponentType, FC, useMemo } from 'react'
import {
  createNavigator,
  useBackButtonIntegration,
  useNavigatorIntegration,
} from '@tma.js/react-router-integration'
import { useBackButton } from '@tma.js/sdk-react'

interface RouteData {
  path?: string
  Component?: ComponentType
  ErrorBoundary: FC
  children: RouteObject[]
}

const routes: RouteData[] = [
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
]

export const App: FC = () => {
  const tmaNavigator = useMemo(createNavigator, [])
  const [location, navigator] = useNavigatorIntegration(tmaNavigator)
  const backButton = useBackButton()

  useBackButtonIntegration(tmaNavigator, backButton)

  return (
    <Router location={location} navigator={navigator}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} index={false} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}
