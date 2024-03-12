import { useTelegram } from '../useTelegram'

export function useMainButton() {
  const { webApp } = useTelegram()
  const { MainButton: mainButton } = webApp

  const toggle = () => {
    mainButton.isVisible ? mainButton.hide() : mainButton.show()
  }

  const setText = (text: string) => {
    if (!text) {
      return
    }

    mainButton.setText(text)
  }

  return {
    show: mainButton.show,
    hide: mainButton.hide,
    toggle,
    setText,
  }
}
