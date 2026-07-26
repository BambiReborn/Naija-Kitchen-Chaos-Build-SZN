import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LogoImg from '../../assets/login/Login-logo.svg'
import CheckboxImg from '../../assets/login/checkbox.svg'

function EnterEmail () {
    const navigate = useNavigate()
    const [email, setEmail] = useState ('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/setPassword')
    }

    return (
        <section className="loginPage">
            <div className="loginForm">

                <div className="loginLogo">
                    <img src={LogoImg} alt="" />
                </div>

                <div className="loginTextCont">
                    <h5 className="loginText">Create your account</h5>
                    <div className="loginLine"></div>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="loginInputCont">

                        <div className="labelInputCont">
                            <p className="labelText">Email Address</p>
                            <div className="labelInput">
                            <input 
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="loginInput"
                            />
                            </div>
                        </div>

                        <div className="labelInputCont">
                            <p className="labelText">Retype Enail</p>
                            <div className="labelInput">
                            <input 
                                type="email"
                                placeholder="Retype Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="loginInput"
                            />
                            </div>
                        </div>

                    </div>

                    <div className="acceptCheckbox">
                        <img src={CheckboxImg} alt="" />
                        <p className="checkboxText">By checking the box, you agree to receive news of these promotions by email from kitchen Chaos. In accordance with each and entitles, privacy policy, you agree to the use of pixel tags in the email to measure open,...</p>
                    </div>

                    <button type="submit" className="primaryButton">Next</button>

                </form>
                
            </div>
        </section>
    )
}

export default EnterEmail