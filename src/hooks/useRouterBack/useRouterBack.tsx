import { useMemo } from 'react'
import {
  useBackButtonIntegration,
  createNavigator,
} from '@tma.js/react-router-integration'
import { useBackButton } from '@tma.js/sdk-react'

export function useRouterBack() {
  const tmaNavigator = useMemo(createNavigator, [])
  const backButton = useBackButton()

  useBackButtonIntegration(tmaNavigator, backButton)
}
