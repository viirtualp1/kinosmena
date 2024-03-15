import { MainPage } from './components/MainPage'
import { useTheme } from './hooks/useTheme'

function App() {
  useTheme()

  return (
    <>
      <MainPage />
    </>
  )
}

export default App
