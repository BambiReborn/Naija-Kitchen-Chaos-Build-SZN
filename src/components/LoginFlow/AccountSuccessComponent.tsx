import { useNavigate } from "react-router-dom"
import LogoImg from '../../assets/login/Login-logo.svg'

function AccountSuccessComponent () {
    const navigate = useNavigate()

    return (
        <section className="accountSuccess">

            <div className="loginLogo">
                <img src={LogoImg} alt="" />
            </div>

            <div className="loginTextCont">
                    <h5 className="loginText">Account Creation Successful</h5>
                    <div className="loginLine"></div>
            </div>

            <div className="activationAccountCont">
                <p className="activationTitle">Your activation account details:</p>
                <div className="activationCont">
                    <div className="activationNameCont">
                        <p className="activationUser">Chaos Username</p>
                        <p className="activationText">gigglemanchaos</p>
                    </div>

                    <div className="activationNameCont">
                        <p className="activationUser">Email Address</p>
                        <p className="activationText">ele******za@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="accountButtonCont">
                <button className="primaryButton" onClick={() => navigate('/login')}>Sign in</button>

                <button className="secondaryButton" onClick={() => navigate('/')}>Go to home</button>
            </div>

        </section>
    );
}

export default AccountSuccessComponent