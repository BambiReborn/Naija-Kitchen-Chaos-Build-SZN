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

        <a href="#" target="_blank">PLAY NOW</a>
    </header>
  )
}

export default Header
