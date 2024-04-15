import { useInitData } from '@tma.js/sdk-react'
import axios from 'axios'

export function useTelegramInfo() {
  const initData = useInitData()

  if (!initData || initData.user?.id) {
    return
  }

  axios.defaults.params.tid = initData.user?.id
}
