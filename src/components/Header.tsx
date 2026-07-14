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
        </nav>

        <a href="https://play.unity.com/en/games/6e324785-a61c-4f2d-845d-a983e36ae2ce/naija-kitchen-chaos" target="_blank">PLAY NOW</a>
    </header>
  )
}

export default Header
