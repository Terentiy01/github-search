import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import FavouritesPage from './pages/FavouritesPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
