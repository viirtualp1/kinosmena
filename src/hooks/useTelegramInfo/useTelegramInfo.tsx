import { useInitData } from '@tma.js/sdk-react'
import axios from 'axios'

export function useTelegramInfo() {
  const initData = useInitData()

  axios.defaults.params.tid =
    initData?.user?.id || import.meta.env.VITE_TEST_TID
}
