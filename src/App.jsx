import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import './App.css'
import Card from './components/card/Card'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/favorite' element={<Card />} />
          <Route path='/addMovie' element={<Card />} />
          <Route path='/addgenre' element={<Card />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
