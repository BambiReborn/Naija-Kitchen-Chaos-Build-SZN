// IMPORTS //
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import logo from '../assets/shared/Logo.svg'

function Footer() {
  return (
    <footer>

        {/* MAIN FOOTER */}
        <div id="mainFooter-wrapper">

            {/* LOGO */}
            <div id="footer-logo">
                <img src={logo} alt="Naija Kitchen Chaos | NKC" />
                <div>
                    <p>Cook together.</p>
                    <p>Laugh together.</p>
                    <p>Win together.</p>
                </div>
            </div>

            {/* QUICK LINKS */}
            <div id="quick-links">
                <h4>QUICK LINKS</h4>
                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/leaderboard">Levels</Link></li>
                    <li><Link to="/characters">Characters</Link></li>
                    <li><a href="https://studioultra.itch.io/naija-kitchen-chaos">Download</a></li>
                </ul>
            </div>

            {/* SUPPORT */}
            <div id="support">
                <h4>SUPPORT</h4>
                
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><a href="#">Report a Bug</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>

            {/* FOLLOW US */}
            <div id="footer-socials">
                <h4>FOLLOW US</h4>
                
                <div id="social-icons">
                    <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-discord"></i></a>
                    <a href="#" target="_blank" id="youtube"><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>

            {/* NEWSLETTER */}
            <div id="newsLetter">
                <h4>JOIN THE KITCHEN CREW</h4>
                <p>Get updates, news and delicious chaos straight to your inbox!</p>
                
                <form id="email-input-div" action="https://api.web3forms.com/submit" method="POST" >
                    <input type="hidden" name="access_key" value="b815ab79-b620-48f8-90d3-48c938f3c9a7" />
                    <input type="hidden" name="subject" value="New Newsletter Subscriber - Naija Kitchen Chaos | NKC" />
                    <input type="hidden" name="from_name" value="Naija Kitchen Chaos | NKC" />
                    <input type="hidden" name="replyto" value="email" />
                    <input type="hidden" name="message" value="Thank you for subscribing to Naija Kitchen Chaos! We'll keep you updated on new features, tournaments and more. Stay tuned!" />
                    <input type="email" id="email-input" name="email" placeholder="Enter your email" required />
                    
                    <button id="emailBTN" type="submit">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </form>
            </div>
        </div>

      
        {/* FOOTER BOTTOM */}
        <div id="footer-bottom">
            <hr id="footer-line" />
            <div id="footer-bottom-content">
                <p>2026 Naija Kitchen Chaos. All rights reserved</p>
                
                <nav id="footer-nav">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
                </nav>
            </div>
        </div>

    </footer>
  )
}

export default Footer
