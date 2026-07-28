import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from '../../assets/login/Login-logo.svg'

function CreateIDComponent () {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/accountSuccess')
    }

    return (
        <section className="loginPage">
            <div className="loginForm">

                <div className="loginLogo">
                    <img src={LogoImg} alt="" />
                </div>

                <div className="loginTextCont">
                    <h5 className="loginText">Create your ID</h5>
                    <div className="loginLine"></div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="loginInputCont">

                        <div className="labelInputCont">
                            <p className="labelText">Username</p>
                            <div className="labelInput">
                                <input 
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="labelInputCont">
                            <p className="labelText">First Name</p>
                            <div className="labelInput">
                                <input 
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="labelInputCont">
                            <p className="labelText">Last Name</p>
                            <div className="labelInput">
                                <input 
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>

                    </div>

                    <button type="submit" className="primaryButton">Next</button>

                </form>

            </div>
        </section>
    );
}

export default CreateIDComponent