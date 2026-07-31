import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import LogoImg from '../../assets/login/Login-logo.svg'

function SignupComponent () {
    const navigate = useNavigate()

    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [year, setYear] = useState('')
    const [country, setCountry] = useState('')

    const handleNext = () => {
        navigate('/enterEmail')
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

                <div className="loginInputCont">
                    <div className="labelInputCont">
                        <p className="labelText">Date of birth</p>

                        <div className="dobInputRow">
                            <select className="labelInput" value={month} onChange={(e) => setMonth(e.target.value)}>
                                <option value="">Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="12">December</option>
                            </select>

                            <select className="labelInput" value={day} onChange={(e) => setDay(e.target.value)}>
                                <option value="">Day</option>{Array.from({ length: 31 }, (_,i) => i + 1).map((d) => (<option key={d} value={d}>{d}</option>))}
                            </select>

                            <select className="labelInput" value={year} onChange={(e) => setYear(e.target.value)}>
                                <option value="">Year</option>{Array.from({ length: 100 }, (_, i) => 2026 - i).map ((y) => (<option key={y} value={y}>{y}</option>))}
                            </select>

                        </div>
                    </div>

                    <div className="labelInputCont">
                        <p className="labelText">Country/Region</p>
                        <select className="labelInput countrySelect" value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="">Select Country</option>
                            <option value="NG">Nigeria</option>
                            <option value="GH">Ghana</option>
                            <option value="US">United States</option>
                         </select>
                        
                    </div>
                </div>

                <button className="loginPrimaryButton" onClick={handleNext}>Next</button>

                <p className="othersButtonText">Already have an account?</p><Link to="/Login"className="othersButton">Sign In</Link>

            </div>
        </section>
    )
}

export default SignupComponent