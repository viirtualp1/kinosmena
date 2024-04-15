import { useEffect, useState } from 'react'

interface UserData {
  firstName: string | undefined
  lastName: string | undefined
  username: string | undefined
}

export function useFullName(options: UserData) {
  const [fullName, setFullName] = useState('Личный кабинет')

  useEffect(() => {
    if (!options.firstName && !options.lastName) {
      setFullName(`@${options.username}`)

      return
    }

    if (options.firstName && !options.lastName) {
      setFullName(options.firstName)

      return
    }

    return setFullName(`${options.firstName} ${options.lastName}`)
  }, [options.username, options.firstName, options.lastName])

  return {
    fullName,
  }
}
