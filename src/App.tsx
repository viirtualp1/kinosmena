import { ShiftPage } from './components/ShiftPage'
import { useTheme } from './hooks/useTheme'

function App() {
  useTheme()

  return (
    <>
      <ShiftPage />
    </>
  )
}

export default App
