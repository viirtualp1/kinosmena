export function useTelegram() {
  const webApp = window.Telegram.WebApp

  return {
    webApp,
    user: webApp.initDataUnsafe?.user,
    close: webApp.close,
  }
}
