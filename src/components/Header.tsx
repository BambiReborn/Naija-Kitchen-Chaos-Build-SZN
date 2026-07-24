// IMPORTS //
import '../styles/Header.css'
import {Link} from 'react-router-dom'
import logo from '../assets/shared/Logo.svg'

function Header() {
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
            <Link to ="/login">LOGIN</Link>
        </nav>

        {location.pathname !== '/leaderboard' ? (
          <>
            <a href="https://play.unity.com/en/games/6e324785-a61c-4f2d-845d-a983e36ae2ce/naija-kitchen-chaos" target="_blank" id='playNow-BTN'>
                PLAY NOW
            </a>
            <Link to ="/login">LOGIN</Link>
          </>
        ) : (
          <div style={{ width: '8%' }}></div>
        )}

    </header>
  )
}

export default Header
