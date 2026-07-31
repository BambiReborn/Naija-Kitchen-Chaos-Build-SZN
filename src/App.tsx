import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Leaderboard from './pages/Leaderboard'
import Community from './pages/Community'
import Characters from './pages/Characters'
import Download from './pages/Download'
// LOGIN FLOW//
import LoginComponent from './pages/Login'
import SignupComponent from './pages/Signup'
import SetPasswordComponent from './pages/SetPassword'
import EnterEmailComponent from './pages/EnterEmail'
import CreateIDComponent from './pages/CreateID'
import AccountSuccessComponent from './pages/AccountSuccess'
import { SignupProvider } from './components/LoginFlow/SignupContext'
// HEADER & FOOTER //
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <SignupProvider>
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
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/setPassword" element={<SetPasswordComponent />} />
          <Route path="/enterEmail" element={<EnterEmailComponent />} />
          <Route path="/createID" element={<CreateIDComponent />} />
          <Route path="/accountSuccess" element={<AccountSuccessComponent />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </SignupProvider>
  )
}

export default App;