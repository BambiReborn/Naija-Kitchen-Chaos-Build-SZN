// IMPORTS //
import '../styles/Download.css'

// HERO SECTION //
import heroChefs from '../assets/download/heroChefs.png'

function Download () {
    return (
        <main>

            {/* HERO SECTION */}
            <section id='hero-section'>
                <div id='write-up'>
                    <h1>
                        JOIN MAMA NGOZI
                    </h1>

                    <h2>
                        COOK AND SERVE AUTHENTIC CUSINES <br />
                        AGAINST ALL <br />
                        <span style={{color: '#FFB54D'}}>ODDS</span>
                    </h2>
                </div>

                <div id='heroIMG'>
                    <img src={heroChefs} alt="" />
                </div>
            </section>

            {/* CHOOSE PLATFORM SECTION */}
            <section id='choose-platform'>
                <div id='line'></div>

                <h3>
                    CHOOSE YOUR PLATFORM
                </h3>

                <div id='platforms-wrapper'>
                    {/* WINDOWS */}
                    <div className="download-option">
                        <i className="fa-brands fa-windows"></i>
                        <h3>WINDOWS</h3>
                        <p>(64-bit)</p>

                        <a href=""><i className="fa-solid fa-download"></i>
</a>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Download