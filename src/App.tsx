import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Leaderboard from './pages/Leaderboard'
import Community from './pages/Community'
import Characters from './pages/Characters'
// import Login from './pages/Login'
import Download from './pages/Download'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/characters" element={<Characters />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/download" element={<Download />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App