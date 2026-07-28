import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Leaderboard from './pages/Leaderboard'
import Community from './pages/Community'
import Characters from './pages/Characters'
import Download from './pages/Download'
// LOGIN FLOW//
import LoginComponent from './pages/LoginComponent'
import SignupComponent from './pages/SignupComponent'
import SetPasswordComponent from './pages/SetPasswordComponent'
import EnterEmailComponent from './pages/EnterEmailComponent'
import CreateIDComponent from './pages/CreateIDComponent'
import AccountSuccessComponent from './pages/AccountSuccessComponent'
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
        <Route path="/loginComponent" element={<LoginComponent />} />
        <Route path="/signupComponent" element={<SignupComponent />} />
        <Route path="/setPasswordComponent" element={<SetPasswordComponent />} />
        <Route path="/enterEmailComponent" element={<EnterEmailComponent />} />
        <Route path="/createIDComponent" element={<CreateIDComponent />} />
        <Route path="/accountSuccessComponent" element={<AccountSuccessComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;