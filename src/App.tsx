import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Leaderboard from './pages/Leaderboard'
import Community from './pages/Community'
import Characters from './pages/Characters'
import Download from './pages/Download'
// LOGIN FLOW//
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import SetPassword from './pages/SetPassword'
// import EnterEmail from './pages/EnterEmail'
// import CreateID from './pages/CreateID'
// import AccountSuccess from './pages/AccountSuccess'
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
        <Route path="/download" element={<Download />} />
        {/* LOGIN FLOW */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/setPassword" element={<SetPassword />} /> */}
        {/* <Route path="/enterEmail" element={<EnterEmail />} /> */}
        {/* <Route path="/createID" element={<CreateID />} /> */}
        {/* <Route path="/accountSuccess" element={<AccountSuccess />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;