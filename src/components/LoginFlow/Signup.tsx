import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";

function Signup () {
    const navigate = useNavigate()

    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [year, setYear] = useState('')
    const [country, setCountry] = useState('')

    const handleNext = () => {
        navigate('/setPassword')
    }

    return (
        <section className="signupPage">
            <div className="signupForm">

                <div className="LoginLogo"></div>

                <div className="LoginTextCont">
                    <h5 className="LoginText">Create your account</h5>
                    <div className="LoginLine"></div>
                </div>

                <div className="signUpInputCont">
                    <div className="labelInputCont">
                        <p className="labelText">Date of birth</p>

                        <div className="labelInput">
                            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                                <option value="">Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="12">December</option>
                            </select>

                            <select value={day} onChange={(e) => setDay(e.target.value)}>
                                <option value="">Day</option>{Array.from({ length: 31 }, (_,i) => i + 1).map((d) => (<option key={d} value={d}>{d}</option>))}
                            </select>

                            <select value={year} onChange={(e) => setYear(e.target.value)}>
                                <option value="">Year</option>{Array.from({ length: 100 }, (_, i) => 2026 - i).map ((y) => (<option key={y} value={y}>{y}</option>))}
                            </select>

                        </div>
                    </div>

                    <div className="countryInputCont">
                        <p className="labelText">Country/Region</p>
                        <div className="labelInput">
                            <select value={country} onChange={(e) => setCountry(e.target.value)}>
                                <option value="">Select Country</option>
                                <option value="NG">Nigeria</option>
                                <option value="GH">Ghana</option>
                                <option value="US">United States</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button className="primaryButton" onClick={handleNext}>Next</button>

                <p className="othersButtonText">Already have an account?</p><Link to="/Login"className="othersButton">Sign In</Link>

            </div>
        </section>
    )
}

export default Signup