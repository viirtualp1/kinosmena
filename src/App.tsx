import { useTelegram } from './composables'

function App() {
  const { toggleButton } = useTelegram()

  return (
    <>
      <div className="container">
        <button onClick={toggleButton}>Toggle main button</button>
      </div>
    </>
  )
}

export default App
