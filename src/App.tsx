import { useTelegram } from './composables'

function App() {
  const { toggleButton } = useTelegram()

  return (
    <>
      <button onClick={toggleButton}>Toggle main button</button>
    </>
  )
}

export default App
