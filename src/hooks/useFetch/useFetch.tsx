import { useResource } from '@axios-use/react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { get } from 'lodash'

interface Options {
  params?: Record<string, string | number>
  errorKey?: string
}

export function useFetch<T>(
  url: string,
  options?: Options,
): {
  data: T | null
  error: unknown
  isLoading?: boolean
  setData: Dispatch<SetStateAction<T | null>>
} {
  const navigate = useNavigate()
  const [data, setData] = useState<T | null>(null)

  const [{ data: _data, error, isLoading }] = useResource(
    () => ({ url, params: options?.params }),
    [],
  )

  useEffect(() => {
    if (error) {
      console.error(error)

      alert(
        get(error, `data.${options?.errorKey}`, 'Ошибка при получении данных'),
      )

      navigate('/')
    }

    if (!isLoading && data) {
      setData(_data)
    }
  }, [_data, data, error, isLoading, navigate, options?.errorKey])

  return {
    data,
    error,
    isLoading,
    setData,
  }
}
