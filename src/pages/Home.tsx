// IMPORTS //
import '../styles/Home.css'
import CTAButton from '../components/CTAButton'
import bubblyMan from '../assets/home/bubbly male chef.png'
import bubblyLady from '../assets/home/bubbly female chef.png'

function Home() {
  return (
    <main>
        {/* HERO SECTION */}
        <section id='heroSection'>
            <div id='textSide'>
                <h1>
                JOIN MAMA NGOZI
                </h1>

                <h2>
                    COOK AND SERVE AUTHENTIC CUSINES <br />
                    AGAINST ALL <br />
                    <span style={{color: '#FFB54D'}}>ODDS</span>
                </h2>

                <nav>
                    <CTAButton text="PLAY NOW" href="#" />
                    <CTAButton text={<><i className="fa-regular fa-circle-play"></i> WATCH TRAILER</>} href="#" />
                </nav>
            </div>

            <div id='imageSide'>
                <img src={bubblyMan} alt="Nigerian Chef" />

                <div id='aboutGame-text'>
                    <h4>
                        ABOUT THE GAME
                    </h4>

                    <h3>
                        WHAT IS NAIJA KITCHEN CHAOS?
                    </h3>
                    <p>
                        Naija Kitchen chaos is a fast-paced cooperative cooking game where players <br /> 
                        chop, cook and serve Nigerian dishes before time runs out. <br />
                        Work together, communicate and keep calm even when the kitchen turns into <br />
                        complete chaos
                    </p>

                    <CTAButton text="DOWNLOAD" href="#" className="downloadBTN" />

                    <img src={bubblyLady} alt="Nigerian Lady" />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home
