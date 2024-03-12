export function useTelegram() {
  const webApp = window.Telegram.WebApp

  const close = () => {
    webApp.close()
  }

  const toggleButton = () => {
    const { MainButton: mainButton } = webApp

    if (!mainButton) {
      return
    }

    mainButton.isVisible ? mainButton.hide() : mainButton.show()
  }

  return {
    webApp,
    user: webApp.initDataUnsafe?.user,
    close,
    toggleButton,
  }
}
