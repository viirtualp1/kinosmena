import { useTelegram } from './composables/useTelegram/useTelegram.ts'

function App() {
  const { toggleButton } = useTelegram()

  return (
    <>
      <button onClick={toggleButton}>Toggle main button</button>
    </>
  )
}

export default App
