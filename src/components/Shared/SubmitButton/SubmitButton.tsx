import { useEffect } from 'react'
import { useMainButton } from '@tma.js/sdk-react'

interface Props {
  submit: () => void
}

export function SubmitButton({ submit }: Props) {
  const mainButton = useMainButton()

  useEffect(() => {
    mainButton.setParams({
      text: 'Сохранить',
    })

    mainButton.show()

    return mainButton.on('click', submit)
  }, [mainButton, submit])

  return null
}
