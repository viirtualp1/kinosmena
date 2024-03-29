import { MainPage } from '@/components/MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />        
      </Routes>
    </Router>
  )
}

export default App
