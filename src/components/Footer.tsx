import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/shared/Logo.svg'
import '../styles/Footer.css'

function Footer() {

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })

    if (response.ok) {
      form.reset()
      setSubmitted(true)
    }
  }

  return (
    <footer>

        {/* MAIN FOOTER */}
        <div id="mainFooter-wrapper">

            {/* LOGO */}
            <div id="footer-logo">
                <img src={logo} alt="Naija Kitchen Chaos" />
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
                <li><Link to="/leaderboard">Levels</Link></li>
                <li><Link to="/characters">Characters</Link></li>
                <li><a href="#" target="_blank">Download</a></li>
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
            <div id="newsletter">
            <h4>JOIN THE KITCHEN CREW</h4>
            <p>Get updates, news and delicious chaos straight to your inbox!</p>

            {submitted ? (
                <p id="success-msg">Thanks for subscribing! Check your inbox.</p>
            ) : (
                <form id="email-input-div" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="b815ab79-b620-48f8-90d3-48c938f3c9a7" />
                <input type="hidden" name="subject" value="New Newsletter Subscriber - Naija Kitchen Chaos" />
                <input type="hidden" name="from_name" value="Naija Kitchen Chaos" />
                <input type="hidden" name="replyto" value="email" />
                <input type="hidden" name="message" value="Thank you for subscribing to Naija Kitchen Chaos! We'll keep you updated on new features, tournaments and more. Stay tuned!" />
                <input type="email" id="email-input" name="email" placeholder="Enter your email" required />
                
                <button id="emailBTN" type="submit">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
                </form>
            )}
            </div>

        </div>

        {/* FOOTER BOTTOM */}
        <hr id="footer-line" />
        <div id="footer-bottom">
            <p>2026 Naija Kitchen Chaos. All rights reserved</p>
            <nav id="footer-nav">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            </nav>
        </div>

    </footer>
  )
}

export default Footer