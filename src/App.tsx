import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Leaderboard from './pages/Leaderboard'
import Community from './pages/Community'
import Characters from './pages/Characters'
import Download from './pages/Download'
// LOGIN FLOW//
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
        {/* <Route path="/signup" element={<signup />} /> */}
        {/* <Route path="/setPassword" element={<setPassword />} /> */}
        {/* <Route path="/enterEmail" element={<enterEmail />} /> */}
        {/* <Route path="/createID" element={<createID />} /> */}
        {/* <Route path="/accountSuccess" element={<accountSuccess />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;