import './App.css'
import ArquivoP from './Components/ArquivoP'
import MenuP from './Components/MenuP'
import Tempo from './Components/Tempo'
import Fotos from './Components/Fotos'
import FeedBack from './Components/FeedBack'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='tudo'>
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<ArquivoP />} />

          {/* Página do cronômetro */}
          <Route path="/tempo" element={<Tempo />} />

          <Route path="/fotos" element={<Fotos />} />

          <Route path="/feedback" element={<FeedBack />} />
        </Routes>
        <MenuP />
      </div>
    </Router>
  )
}

export default App