import { KsButton } from '@/components/ui'
import { useMainButton } from '@/hooks/useMainButton'

export function MainPage() {
  const { toggle } = useMainButton()

  return (
    <div className="container content">
      <h1>Kinosmena</h1>

      <KsButton
        text="Toggle main button"
        theme="accent"
        size="large"
        block
        onClick={toggle}
      />
    </div>
  )
}
