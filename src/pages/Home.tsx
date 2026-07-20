// IMPORTS //
import '../styles/Home.css'
import CTAButton from '../components/CTAButton'
import bubblyMan from '../assets/home/bubbly male chef.png'
import bubblyLady from '../assets/home/bubbly female chef.png'

// MEET THE CHEF CARDS //
import ChefCards from '../components/ChefCards'
import emeka from '../assets/home/chef-emeka.png'
import chinedu from '../assets/home/chef-chinedu.png'
import ngozi from '../assets/home/ngozi.png'
import tunde from '../assets/home/chef-tunde.png'
import AIChef from '../assets/home/AI chef.png'

const chefs = [
    { image: emeka, name: 'EMEKA', role: 'The Veteran', description: 'Years of experience and zero tolerance for nonsense' },
    { image: chinedu, name: 'CHINEDU', role: 'The Speedster', description: 'Fast hands, faster feet. Always three steps ahead.' },
    { image: ngozi, name: 'NGOZI', role: 'The Organizer', description: 'Neat and the reason the team don\'t fall apart.' },
    { image: tunde, name: 'TUNDE', role: 'The wild card', description: 'Chaos? what chaos? Tunde just wants to have fun.' },
    { image: AIChef, name: 'AI-SOUS CHEF', role: 'The Digital Assistant', description: 'Smart, helpful and doesn\'t complain.' },
]

// GAME FEATURES SECTION //
import fireChef from '../assets/home/gameFTs image.png'
import GameFTsCards from '../components/GameFTsCards'
import increaseDifficulty from '../assets/home/game-bars.png'
import multiPlayer from '../assets/home/game-controller.png'
import timeChallenges from '../assets/home/game-stopwatch.png'


// GAMING TOURNAMENT //
import TournamentCard from '../components/TournamentCard'
import playerIMG from '../assets/home/tournament player.png'

// MEET OUR TOP PLAYERS SECTION //
import Emeka12 from '../assets/home/Emeka12.png'
import proCook from '../assets/home/Pro-cook.png'
import iLuvsuya from '../assets/home/iLuvsuya.png'
import chefChi from '../assets/home/Chefchi.png'

// JOIN COMMUNITY SECTION //
import communityIMG from '../assets/home/community.png'

// LATEST NEWS SECTION //
import newsLady from '../assets/home/latest-news lady.png'
import newsMan from '../assets/home/latest-news man.png'
import LatestNewsCard from '../components/LatestNewsCard'

// SURVIVE KITCHEN SECTION //
import SurviveKitchen from '../components/SurviveKitchen'
import boilingPot from '../assets/home/boiling-pot.png'


function Home() {

    {/* SCROLL CARD LOGIC */}
    const scrollChefsLeft = () => {
    document.getElementById('chefsWrapper')?.scrollBy({ left: -300, behavior: 'smooth' })
    }

    const scrollChefsRight = () => {
    document.getElementById('chefsWrapper')?.scrollBy({ left: 300, behavior: 'smooth' })
    }

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
                    <CTAButton text="PLAY NOW" href="https://play.unity.com/en/games/6e324785-a61c-4f2d-845d-a983e36ae2ce/naija-kitchen-chaos" className="textSide-playNow"/>
                    <CTAButton text={<><i className="fa-regular fa-circle-play"></i> WATCH TRAILER</>} href="#" className="textSide-watchTrailer" />
                </nav>
            </div>

            <div id='imageSide'>
               
                <svg
                    className="aboutBorder"
                    viewBox="0 0 1200 420"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        d="
                        M30 20
                        H410
                        L455 55
                        H745
                        L790 20
                        H1170
                        L1195 45

                        V375

                        L1170 400

                        H790
                        L745 365
                        H455
                        L410 400
                        H30

                        L5 375

                        V45

                        Z"
                    />
                </svg>
                <img src={bubblyMan} id='bubblyMan' alt="Nigerian Chef" />

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

                    <CTAButton text="DOWNLOAD" href="https://studioultra.itch.io/naija-kitchen-chaos" className="downloadBTN" />
                </div>

                <img src={bubblyLady} id='bubblyLady' alt="Nigerian Lady" />
            </div>
        </section>

        <section id='chefCards'>
            <div className="line-head">
                <h3>
                    MEET THE CHEFS
                </h3>
            </div>

            {/* MEET THE CHEFS CARD */}
            <div className="scrollCards-div">
                <button className="scroll-btn-left" onClick={scrollChefsLeft}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>

                <div className="cards-wrapper" id="chefsWrapper">
                    {chefs.map((chef) => (
                    <ChefCards
                        key={chef.name}
                        image={chef.image}
                        name={chef.name}
                        role={chef.role}
                        description={chef.description}
                    />
                    ))}
                </div>

                <button className="scroll-btn-right" onClick={scrollChefsRight}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>

        </section>
        
        {/* GAME FEATURES SECTION */}
        <section id='gameFTsSection'>
            <div className="line-head">
                <h3>
                    GAME FEATURES
                </h3>
            </div>
            
            <div id='fire-cheff-wrapper'>
                <img src={fireChef} id='fire-chef' alt="Fire Chef" />
            </div>

            {/* CARDS */}
            
                <GameFTsCards 
                    image={increaseDifficulty}
                    title={<>INCREASINGLY <br />
                        DIFFICULT KITCHENS</>}
                    description={<>From small kitchen to    bustling <br />
                        bukkas, chaos level goes higher</>}
                    className="topRight"
                />

                {/* CARD 2 */}
                <GameFTsCards 
                    image={multiPlayer}
                    title={<>LOCAL <br /> MULTIPLAYER</>}
                    description={<>Team up with friends in <br /> local cook-up and <br /> dominate the ktichen</>}
                    className = "centerLeft"
                />

                {/* CARD 3 */}
                <GameFTsCards 
                    image = {timeChallenges}
                    title = {<>TIME-BASED <br /> CHALLENGES</>}
                    description = {<>Race against the clock, <br /> manage multiple orders <br /> and keep your cool</>}
                    className = "bottomRight"
                />
            
        </section>

        {/* GAMING TOURNAMENT SECTION */}
        <section id='tournament-section'>
            <div id='tournament-heading'>
                <h4>
                Competitive Plays
                </h4>
                <h3>
                    OUR GAMING TOURNAMENTS
                </h3>
            </div>

            <div id='tournamentCard-wrapper'>
                {/* CARD 1 */}
                <TournamentCard 
                    player1Image = {playerIMG}
                    player2Image = {playerIMG}
                    status = "UPCOMING"
                    score = "0/0"
                    matchTitle = "Emeka12 VS Chukwuka0"
                    date = "23 August 2026 | 6:00pm "
                    youtubeLink = "#"
                    instagramLink = "#"
                    className = "tournament-cards"
                />

                {/* CARD 2 */}
                <TournamentCard 
                    player1Image = {playerIMG}
                    player2Image = {playerIMG}
                    status = "FINISHED"
                    score = "20/22"
                    matchTitle = "Pro Cook VS King Chef"
                    date = "02 July 2026 | 9:00pm "
                    youtubeLink = "#"
                    instagramLink = "#"
                    className = "tournament-cards"
                />

                {/* CARD 3 */}
                <TournamentCard 
                    player1Image = {playerIMG}
                    player2Image = {playerIMG}
                    status = "UPCOMING"
                    score = "0/0"
                    matchTitle = "iLuvsuya VS Chefchi"
                    date = "2 August 2026 | 6:00pm "
                    youtubeLink = "#"
                    instagramLink = "#"
                    className = "tournament-cards"
                />
            </div>

        </section>

        {/* MEET OUR TOP PLAYERS SECTION */}
        <section id='topPlayers-section'>
            <div id='topPlayers-texts'>
                <h4>Our Top Players</h4>
                <h3>LET'S MEET OUR TOP <br /> PLAYERS</h3>
            </div>

            <div id='topPlayers-images'>
                <div id='img1-div' className="topPlayers-img-div">
                    <img src={Emeka12} id='p1' className="topPlayers-img" alt="Emeka12 - P1" />
                </div>

                <div id='img2-div' className="topPlayers-img-div">
                    <img src={proCook} id='p2' className="topPlayers-img" alt="Pro Cook - P2" />
                </div>

                <div id='img3-div' className="topPlayers-img-div">
                    <img src={iLuvsuya} id='p3' className="topPlayers-img" alt="iLuvsuya - P3" />
                </div>

                <div id='img4-div' className="topPlayers-img-div">
                    <img src={chefChi} id='p4' className="topPlayers-img" alt="Chefchi - P4" />
                </div>
            </div>
        </section>

        {/* JOIN COMMUNITY SECTION */}
        <section id='joinCommunity-section'>
            
            <div id='content-wrapper'>
                <svg
                className="aboutBorder"
                viewBox="0 0 1200 420"
                preserveAspectRatio="none"
                aria-hidden="true"
                >
                    <path
                        d="
                        M30 20
                        H410
                        L455 55
                        H745
                        L790 20
                        H1170
                        L1195 45

                        V375

                        L1170 400

                        H790
                        L745 365
                        H455
                        L410 400
                        H30

                        L5 375

                        V45

                        Z"
                    />
                </svg>

                <div id='communityText'>
                    <h4>COOK TOGETHER, WIN TOGETHER.</h4>
                    <h3>
                        Join Naija's Top Cooking Game <br /> <span style={{color: '#FFB54D'}}>Community Today</span>
                    </h3>

                    <p>
                        Naija Kitchen chaos is a one of Nigeria’s top cooking game where you can connect <br/>
                        with fellow chefs, food enthusiats, share recipes, join events, and complete cooking <br/>
                        challenges. <br/>
                        From Jollof battles to Suya showdowns - Naija Kitchen chaos community is always lit.
                    </p>

                    <CTAButton 
                        text = "JOIN COMMUNITY"
                        href="/community"
                        internal
                        className = "joinCommunity-BTN"
                    />
                </div>

                <div id='communityImg'>
                    <img src={communityIMG} alt="Community Awareness" />
                </div>
            </div>
        </section>

        {/* #LATEST NEWS SECTION */}
        <section id='latestNews-section'>
            <div id='latestNews-heading'>
                <h4>#Latest News</h4>
                <h3>Stay Updated With Our Blog <span style = {{color: '#FFB54D'}}>!</span></h3>
            </div>

            {/* CARDS */}
            <div id='newsCards-wrapper'>
                <LatestNewsCard 
                    image = {newsLady}
                    author= "By Eleganza"
                    date = "21st July, 2026"
                    description = {<>Breaking Barriers and Shaping the <br />Future</>}
                    readMoreLink= "#"
                    className = "newsCard"
                />

                {/* CARD 2 */}
                <LatestNewsCard 
                    image = {newsMan}
                    author= "By Gerald"
                    date = "30th July, 2026"
                    description = {<>Strategies for Dominating your <br />Favorite Game</>}
                    readMoreLink= "#"
                    className = "newsCard"
                />

                {/* CARD 3 */}
                <LatestNewsCard 
                    image = {newsLady}
                    author= "By Ifechukwu"
                    date = "16th July, 2026"
                    description = {<>Taking Cooking to the Next Level</>}
                    readMoreLink= "#"
                    className = "newsCard"
                />
            </div>
        </section>

        {/* SURVIVE KITCHEN SECTION */}
        <SurviveKitchen 
            image = {boilingPot}
        />

        {/* FOOTER */}

    </main>
  )
}

export default Home
