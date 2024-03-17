import { ShiftPage } from '@/components/shift'
import { useTheme } from '@/hooks/useTheme'

function App() {
  useTheme()

  return (
    <>
      <ShiftPage />
    </>
  )
}

export default App
