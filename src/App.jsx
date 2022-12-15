import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import './App.css'
import Card from './components/card/Card'
import Header from './components/header/Header'
import Layout from './components/layout/Layout'
import FavouritePage from './pages/Favourite/FavouritePage'
import MainPage from './pages/Main/MainPage'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Layout>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/favourite' element={<FavouritePage />} />
            <Route path='/addMovie' element={<Card />} />
            <Route path='/addgenre' element={<Card />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
