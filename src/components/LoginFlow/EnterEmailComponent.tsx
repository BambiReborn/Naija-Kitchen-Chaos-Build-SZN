import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useSignup } from "./SignupContext"
import LogoImg from '../../assets/login/Login-logo.svg'
import CheckboxImg from '../../assets/login/checkbox.svg'
import CheckboxCheckedImg from '../../assets/login/checkedboxImg.svg'

function EnterEmailComponent () {
    const navigate = useNavigate()
    const { signupData, updateSignupData } = useSignup()
    //const [email, setEmail] = useState ('')
    const [retypeEmail, setRetypeEmail] = useState ('')
    const [agreed, setAgreed] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        if (signupData.email !== retypeEmail) {
            setError('Emails do not match')
            return
        }

        if (!agreed) {
            setError('You must accept the terms to continue')
            return
        }

        navigate('/setPassword')
    }

    return (
        <section className="loginPage">
            <div className="loginForm">

                <Link to="/" className="loginLogo">
                    <img src={LogoImg} alt="" />
                </Link>

                <div className="loginTextCont">
                    <h5 className="loginText">Create your account</h5>
                    <div className="loginLine"></div>
                </div>

                <form onSubmit={handleSubmit} className="submitFormFields">

                    <div className="loginInputCont">

                        <div className="labelInputCont">
                            <p className="labelText">Email Address</p>
                            <input 
                                type="email"
                                placeholder="Email Address"
                                value={signupData.email}
                                onChange={(e) => updateSignupData({ email: e.target.value })}
                                className="loginInput"
                            />
                        
                        </div>

                        <div className="labelInputCont">
                            <p className="labelText">Retype Enail</p>
                            <input 
                                type="email"
                                placeholder="Retype Email"
                                value={retypeEmail}
                                onChange={(e) => setRetypeEmail(e.target.value)}
                                className="loginInput"
                            />
                        </div>

                    </div>

                    <div className="acceptCheckbox" onClick={() => setAgreed(!agreed)}>
                        <img src={agreed ? CheckboxCheckedImg : CheckboxImg} alt="" />
                        <p className="checkboxText">By checking the box, you agree to receive news of these promotions by email from kitchen Chaos. In accordance with each and entitles, privacy policy, you agree to the use of pixel tags in the email to measure open,...</p>
                    </div>

                    {error && <p className="errorText">{error}</p>}

                    <button type="submit" className="primaryButton">Next</button>

                </form>
                
            </div>
        </section>
    )
}

export default EnterEmailComponent