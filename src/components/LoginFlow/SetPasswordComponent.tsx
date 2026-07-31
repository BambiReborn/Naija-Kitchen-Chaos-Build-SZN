import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSignup } from "./SignupContext"
import LogoImg from '../../assets/login/Login-logo.svg'

function SetPasswordComponent () {
    const navigate = useNavigate()
    const { signupData, updateSignupData } = useSignup()
    //const [password, setNewPassword] = useState('')
    const [retypePassword, setRetypePassword] = useState('')
    const [error, setError] = useState('')

    const handleNext = () => {
        if (signupData.password !== retypePassword) {
            setError('Passwords do not match')
            return
        }
        navigate('/createID')
    }

    return (
        <section className="loginPage">
            <div className="loginForm">

                <div className="loginLogo">
                    <img src={LogoImg} alt="" />
                </div>

                <div className="loginTextCont">
                    <h5 className="loginText">Set your password</h5>
                    <div className="loginLine"></div>
                </div>

                <div className="loginInputCont">
                    <div className="labelInputContain setPasswordCont">
                        <div className="labelInputCont">
                            <p className="labelText">New Password</p>
                            <input type="password"
                                value={signupData.password}
                                onChange={(e) => updateSignupData({ password: e.target.value })} className="loginInput"
                            />
                        </div>

                        <div className="labelErrorContain">
                            <p className="labelErrorText">X 8-30 characters long</p>
                            <p className="labelErrorText">X Contain atleast 1 letter and 1 number</p>
                            <p className="labelErrorText">X May not contain sequential characters  e.g 123,abc</p>
                            <p className="labelErrorText">X May only contain valid characters e.g aaaa</p>
                        </div>

                        <div className="labelInputCont">
                            <p className="labelText">Retype Password</p>
                            <input type="password"
                                value={retypePassword}
                                onChange={(e) => setRetypePassword(e.target.value)} className="loginInput"
                            />
                        </div>

                        {error && <p className="errorText">{error}</p>}

                        <button className="primaryButton" onClick={handleNext}>Next</button>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SetPasswordComponent