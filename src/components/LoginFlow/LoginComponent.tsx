import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/login/Login-logo.svg'

function LoginComponent () {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <section className="loginPage">
            <div className="loginForm">

                <Link to="/" className="loginLogo">
                    <img src={LogoImg} alt="" />
                </Link>

                <div className="loginTextCont">
                    <h5 className="loginText">Sign into your Naija Chaos account</h5>
                    <div className="loginLine"></div>
                </div>

                <form onSubmit={handleSubmit} className="loginFormFields">
                    <div className="loginInputCont">

                        <div className="inputGroup">
                            <p className="inputLabel">Email Address</p>
                            <input 
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="loginInput"
                            />
                        </div>

                        <div className="inputGroup">
                            <p className="inputLabel">Password</p>
                            <input 
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="loginInput"
                            />
                        </div>
                    
                </div>

                <div className="loginButtonwithText">
                    <button type="submit" className="loginPrimaryButton">Sign in</button>

                    <div className="loginButtonwithTextCont">
                        <p className="textWithUnderline">Need Help Signing In?</p>

                        <div className="otherButtonCont">
                            <p className="othersButtonText">Don't have an account?</p>
                            <Link to="/signup" className="othersButton">Sign up</Link>
                        </div>
                    </div>

                </div>
                </form>
                
            </div>
        </section>
    )
}

export default LoginComponent