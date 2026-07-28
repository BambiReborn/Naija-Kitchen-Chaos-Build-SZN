import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LogoImg from '../../assets/login/Login-logo.svg'

function SetPassword () {
    const navigate = useNavigate()

    const [password, setNewPassword] = useState('')
    const [retypePassword, setRetypePassword] = useState('')

    const handleNext = () => {
        if (password !== retypePassword) {
            alert('Passwords do not match')
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
                    <div className="labelInputContain">
                        <div className="labelInputCont">
                            <p className="labelText">New Password</p>

                            <div className="labelInput">
                                <input type="password"
                                value={password}
                                onChange={(e) => setNewPassword(e.target.value)}
                             />
                            </div>
                        </div>

                        <div className="labelErrorContain">
                            <p className="labelErrorText">X 8-30 characters long</p>
                            <p className="labelErrorText">X Contain atleast 1 letter and 1 number</p>
                            <p className="labelErrorText">X May not contain sequential characters  e.g 123,abc</p>
                            <p className="labelErrorText">X May only contain valid characters e.g aaaa</p>
                        </div>

                        <div className="labelInputCont">
                            <p className="labelText">Retype Password</p>

                            <div className="labelInput">
                                <input type="password"
                                value={retypePassword}
                                onChange={(e) => setRetypePassword(e.target.value)}
                             />
                            </div>
                        </div>

                        <button className="primaryButton" onClick={handleNext}>Next</button>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SetPassword