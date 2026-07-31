//import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSignup } from "../../components/LoginFlow/SignupContext"
import LogoImg from '../../assets/login/Login-logo.svg'

function CreateIDComponent () {
    const navigate = useNavigate()
    const { signupData, updateSignupData } = useSignup()

    /*
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    */

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/accountSuccess')
    }

    return (
        <section className="loginPage">
            <div className="loginForm">

                <Link to="/" className="loginLogo">
                    <img src={LogoImg} alt="" />
                </Link>

                <div className="loginTextCont">
                    <h5 className="loginText">Create your ID</h5>
                    <div className="loginLine"></div>
                </div>

                <form onSubmit={handleSubmit} className="submitFormFields createIDContent">
                    <div className="loginInputCont">

                        <div className="labelInputCont">
                            <p className="labelText">Username</p>
                            <input 
                                type="text"
                                value={signupData.username}
                                onChange={(e) => updateSignupData ({ username: e.target.value })} className="loginInput"
                             />
                        </div>

                        <div className="labelInputCont">
                            <p className="labelText">First Name</p>
                            <input 
                                type="text"
                                value={signupData.firstName}
                                onChange={(e) => updateSignupData({firstName: e.target.value })} className="loginInput"
                            />
                        </div>

                        <div className="labelInputCont">
                            <p className="labelText">Last Name</p>
                            <input 
                                type="text"
                                value={signupData.lastName}
                                onChange={(e) => updateSignupData({ lastName: e.target.value })} className="loginInput"
                            />
                        </div>

                    </div>

                    <button type="submit" className="primaryButton">Next</button>

                </form>

            </div>
        </section>
    );
}

export default CreateIDComponent