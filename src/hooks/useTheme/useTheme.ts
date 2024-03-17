import { useTelegram } from '../useTelegram'

export function useTheme() {
  const { webApp } = useTelegram()

  const { themeParams } = webApp

  document.body.style.cssText = `
    --color-text: ${themeParams.text_color || '#000'};
    --color-secondary: ${themeParams.hint_color || '#66666e'};
    --color-background: ${themeParams.bg_color || '#fff'};
    --color-button-bg-color: ${themeParams.button_color || '#339AF0'};
    --color-button-text-color: ${themeParams.button_text_color || '#fff'};
  `
}
