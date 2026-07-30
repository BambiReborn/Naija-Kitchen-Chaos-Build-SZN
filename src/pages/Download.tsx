// IMPORTS //
import '../styles/Download.css'

// HERO SECTION //
import heroChefs from '../assets/download/heroChefs.png'

// GAME INFORMATION VIDEO //
import gameVideo from '../assets/download/NKC short video.mp4'

// GAME REVIEW SECTION //
import {useState} from "react";
import reviewImage1 from '../assets/download/review img1.png'
import reviewImage2 from '../assets/download/review img2.png'
import reviewImage3 from '../assets/download/review img3.png'
import reviewImage4 from '../assets/download/review img4.png'

// TEAM SECTION //
import teamScroll from '../assets/download/Team scroll.svg'

// WHY DOWNLOAD NKC? //
import teamWork from '../assets/download/team work.png'
import culture from '../assets/download/culture.png'
import excitement from '../assets/download/excitement.png'
import communityHeart from '../assets/download/community heart.png'


function Download () {

    {/* REVIEW IMAGE LOGIC */}
    const reviewImages = [
        reviewImage1,
        reviewImage2,
        reviewImage3,
        reviewImage4
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    // BTNS LOGIC //
    const previousSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextSlide = () => {
        if (currentIndex < reviewImages.length - 2) {
            setCurrentIndex(currentIndex + 1);
        }
    };

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
                    <img src={heroChefs} alt="NKC Family" />
                </div>
            </section>

            {/* CHOOSE PLATFORM SECTION */}
            <section id='choose-platform'>
                <div id='line'></div>

                <h3 id='platform-header'>
                    CHOOSE YOUR PLATFORM
                </h3>

                {/* DOWNLOAD OPTIONS */}
                <div id='platforms-wrapper'>
                    {/* WINDOWS */}
                    <div className="download-option">
                        <i className="fa-brands fa-windows" id='icons'></i>
                        <h3>WINDOWS</h3>
                        <p>(64-bit)</p>

                        <a href="https://studioultra.itch.io/naija-kitchen-chaos"><i className="fa-solid fa-download"></i> DOWNLOAD
                        </a>

                    </div>

                    {/* MAC OS */}
                    <div className="download-option">
                        <i className="fa-brands fa-apple" id='icons'></i>
                        <h3>MAC OS</h3>
                        <p>(10,14+)</p>

                        <a href="https://studioultra.itch.io/naija-kitchen-chaos"><i className="fa-solid fa-download"></i> DOWNLOAD
                        </a>

                    </div>

                    {/* BROWSER */}
                    <div className="download-option">
                        <i className="fa-solid fa-globe" id='icons'></i>
                        
                        <p id='browser'>(Browser)</p>

                        <a href="https://play.unity.com/en/games/6e324785-a61c-4f2d-845d-a983e36ae2ce/naija-kitchen-chaos"><i className="fa-solid fa-play"></i> PLAY ONLINE
                        </a> 

                    </div>
                </div>

                {/* SYSTEM REQUIRMENTS */}
                <div id="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={3}>SYSTEM REQUIREMENTS</th>
                            </tr>

                            <tr>
                                <th></th>
                                <th>MINIMUM</th>
                                <th>RECOMMENDED</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>OS</td>
                                <td>Windows 10 (64-bit)</td>
                                <td>Windows 10 (64-bit)</td>
                            </tr>

                            <tr>
                                <td>Processor</td>
                                <td>Intel Core i3-6100</td>
                                <td>Intel Core i5-8400</td>
                            </tr>

                            <tr>
                                <td>Memory</td>
                                <td>4GB RAM</td>
                                <td>8GB RAM</td>
                            </tr>

                            <tr>
                                <td>Storage</td>
                                <td>2GB available space</td>
                                <td>2GB available space</td>
                            </tr>

                            <tr>
                                <td>Graphics</td>
                                <td>GTX660 / HD 7850</td>
                                <td>GTX1060 / RX380</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>

            
            {/* GAME INFORMATION */}
            <section id="gameInformation">
                <div id='gameInformation-wrapper'>
                    <div className="gameInformation-header">
                        <h3>GAME INFORMATION</h3>
                    </div>

                    <div className="gameInformation-content">
                        <div className="gameDetails">
                            <div className="gameDetail">
                                <h3>Genre:</h3>
                                <p>Multiplayer</p>
                            </div>

                            <div className="gameDetail">
                                <h3>Players:</h3>
                                <p>1-4 players</p>
                            </div>

                            <div className="gameDetail">
                                <h3>Game size:</h3>
                                <p>1.8GB</p>
                            </div>

                            <div className="gameDetail">
                                <h3>Version</h3>
                                <p>1.0.01</p>
                            </div>

                            <div className="gameDetail">
                                <h3>Last updated</h3>
                                <p>20th, July 2026</p>
                            </div>
                        </div>

                        <div className="gameVideo">
                            <video controls>
                                <source src={gameVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* GAME REVIEW SECTION */}
            <section id="gameReview">
                <h2>GAME REVIEW</h2>

                <div className="reviewSlider">

                    {/* PREVIOUS BUTTON */}
                    <button
                        className="sliderButton previousButton"
                        onClick={previousSlide}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    {/* IMAGE SLIDER */}
                    <div className="reviewImages">
                        <div
                            className="reviewImages-track"
                            style={{
                                transform: `translateX(-${currentIndex * 50}%)`
                            }}
                        >
                            {reviewImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Game review ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* NEXT BUTTON */}
                    <button
                        className="sliderButton nextButton"
                        onClick={nextSlide}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>

                </div>
            </section>

            {/* TEAM SECTION */}
            <section className="teamSection">
                <img
                    src={teamScroll}
                    className="teamScroll"
                    alt="Team Names"
                />

                <div className="teamContent">
                    <h3>TEAM</h3>
                    <p>
                        Ebuka - Product Manager.<br />
                        Gerald - Product Designer.<br />
                        Ifechukwu - Product Designer.<br />
                        Sandra - Product Designer.<br />
                        Chukwuemeka - Frontend Developer.<br />
                        Charles - Frontend Developer.<br />
                        Adaeze - Frontend Developer.<br />
                        Toby Aki - Game Developer.<br />
                        Nduche - Game Developer.<br />
                        Jachike - Game Developer.<br />
                        Ositadimma - Data Analyst.<br />
                        Ego - Data Analyst.<br />
                        Christian - Data Analyst.<br />
                        Kelly - Cyber security Engineer
                    </p>
                </div>
            </section>

            {/* WHY DOWNLOAD NKC?? */}
            <section id='whyNKC-section'>
                <div id='whyNKC-heading'>
                    <h3>
                        WHY DOWNLOAD NAIJA KITCHEN CHAOS?
                    </h3>
                </div>

                {/* CONTENTS */}
                <div id='contents-wrapper'>
                    <div className="content">
                        <img src={teamWork} alt="Team Work" />
                        <h3>
                            TEAMWORK
                        </h3>
                        <p>
                            Work together, communicate<br />
                            and win as a team.
                        </p>
                    </div>

                    {/* DIVIDER */}
                    <div className="content-divider"></div>

                    {/* CULTURE */}
                    <div className="content">
                        <img src={culture} alt="Culture" />
                        <h3>
                            CULTURE
                        </h3>
                        <p>
                            Authentic Nigerian dishes<br />
                            made with love.
                        </p>
                    </div>

                    {/* DIVIDER */}
                    <div className="content-divider"></div>

                    {/* EXCITEMENT */}
                    <div className="content">
                        <img src={excitement} alt="Excitement" />
                        <h3>
                            EXCITEMENT
                        </h3>
                        <p>
                            Fast paced fun that keeps you<br />
                            on your toes.
                        </p>
                    </div>

                    {/* DIVIDER */}
                    <div className="content-divider"></div>

                    {/* COMMUNITY HEART */}
                    <div className="content">
                        <img src={communityHeart} alt="Community" />
                        <h3>
                            COMMUNITY
                        </h3>
                        <p>
                            Building a global comunity of food<br />
                            and game lovers.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Download