import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Matches from './pages/Matches'
import MatchDetail from './pages/MatchDetail'
import CreateMatch from './pages/CreateMatch'
import Profile from './pages/Profile'

function App() {
  const { isAuthenticated } = useSelector(state => state.auth)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/matches" /> : <Login />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/matches" /> : <Register />} />
        <Route path="/matches" element={isAuthenticated ? <Matches /> : <Navigate to="/login" />} />
        <Route path="/matches/:id" element={isAuthenticated ? <MatchDetail /> : <Navigate to="/login" />} />
        <Route path="/matches/create" element={isAuthenticated ? <CreateMatch /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
