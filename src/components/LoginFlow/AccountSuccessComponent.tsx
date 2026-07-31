import { useNavigate,Link } from "react-router-dom"
import { useSignup } from "../../components/LoginFlow/SignupContext"
import LogoImg from '../../assets/login/Login-logo.svg'

function AccountSuccessComponent () {
    const navigate = useNavigate()
    const { signupData } = useSignup()

    return (
        <section className="loginPage">
            <div className="loginForm">
                <Link to="/" className="loginLogo">
                    <img src={LogoImg} alt="" />
                </Link>

                <div className="loginTextCont">
                    <h5 className="loginText">Account Creation Successful</h5>
                    <div className="loginLine"></div>
                </div>

                <div className="activationAccountCont">
                    <p className="activationTitle">Your activation account details:</p>

                    <div className="activationCont">
                        <div className="activationNameCont">
                            <p className="activationUser">Chaos Username</p>
                            <p className="activationText">{signupData.username}</p>
                        </div>

                        <div className="activationNameCont">
                            <p className="activationUser">Email Address</p>
                            <p className="activationText">{signupData.email}</p>
                        </div>
                    </div>
                </div>

                <div className="accountButtonCont">
                    <button className="loginPrimaryButton" onClick={() => navigate('/login')}>Sign in</button>

                    <button className="loginSecondaryButton" onClick={() => navigate('/')}>Go to home</button>
                </div>

            </div>
        </section>
    );
}

export default AccountSuccessComponent