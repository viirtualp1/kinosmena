import { useMainButton } from './hooks/useMainButton'

function App() {
  const { toggle } = useMainButton()

  return (
    <>
      <div className="container">
        <button onClick={toggle}>Toggle main button</button>
      </div>
    </>
  )
}

export default App
