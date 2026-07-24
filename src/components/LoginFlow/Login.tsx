import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login () {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <section className="LoginPage">
            <div className="LoginForm">

                <div className="LoginLogo"></div>

                <div className="LoginTextCont">
                    <h5 className="LoginText">Sign into your Naija Chaos account</h5>
                    <div className="LoginLine"></div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="LoginInputCont">
                    <input 
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="loginInput"
                    />

                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="loginInput"
                    />
                </div>

                <div className="LoginButtonwithText">
                    <button type="submit" className="primaryButton">Sign in</button>

                    <div className="loginButtonwithTextCont">
                        <p className="textWithUnderline">Need Help Signing In?</p>

                        <div className="otherButttonCont">
                            <p className="othersButtonText">Don't have an account?</p>
                            <Link to="/Signup1" className="othersButton">Sign up</Link>
                        </div>
                    </div>

                </div>
                </form>
                
            </div>
        </section>
    )
}

export default Login