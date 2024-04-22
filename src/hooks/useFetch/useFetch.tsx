import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
// import { get } from 'lodash'
import { http } from '../useAxios'
import { get } from 'lodash'

interface Options {
  params?: Record<string, string | number | null | undefined>
  withRedirect?: boolean
}

export function useFetch<T>(
  url: string,
  options?: Options,
): {
  data: T | null
  error: unknown
  isLoading: MutableRefObject<boolean>
  setData: Dispatch<SetStateAction<T | null>>
} {
  const navigate = useNavigate()
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<unknown>()
  const isLoading = useRef(false)

  useEffect(() => {
    const fetchData = async () => {
      isLoading.current = true

      try {
        setData(
          await http.get(url, {
            params: options?.params,
          }),
        )
      } catch (err) {
        console.error(err)

        setError(get(err, 'response.data'))

        if (options?.withRedirect) {
          navigate('/')
        }
      } finally {
        isLoading.current = false
      }
    }

    fetchData()
  }, [navigate, options?.params, url, options?.withRedirect])

  return {
    data,
    error,
    isLoading,
    setData,
  }
}
