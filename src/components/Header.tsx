// IMPORTS //
import '../styles/Header.css'
import {Link, useLocation} from 'react-router-dom'
import logo from '../assets/shared/Logo.svg'

function Header() {
  // REMOVING HEADER FROM BOTH PAGES //
  const location = useLocation()
  if (location.pathname === '/characters' || location.pathname === '/login') return null

  // 

  return (
    <header>
        <img src={logo} alt="Naija Kitchen Chaos | NKC" />

        <nav id='navLink'>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to ="/leaderboard">LEADERBOARD</Link>
            <Link to ="/community">COMMUNITY</Link>
            <Link to ="/characters">CHARACTERS</Link>
            <Link to ="/download">DOWNLOAD</Link>
            
        </nav>


        <nav id='navBTNs'>
          {/* LOGIN BTN */}
          <Link to ="/login" id='login-BTN'>LOGIN</Link>


          {location.pathname !== '/leaderboard' ? (
            <>
              <a href="https://play.unity.com/en/games/6e324785-a61c-4f2d-845d-a983e36ae2ce/naija-kitchen-chaos" target="_blank" id='playNow-BTN'>
                  PLAY NOW
              </a>
              {/* <Link to ="/login">LOGIN</Link> */}
            </>
          ) : (
            <div style={{ width: '8%' }}></div>
          )}
        </nav>

    </header>
  )
}

export default Header
