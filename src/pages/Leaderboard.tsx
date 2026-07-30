// IMPORTS //
import '../styles/Leaderboard.css'

// RANKING CARDS SECTION //
import RankingCards from '../components/RankingCards'
import firstPosition from '../assets/leaderboard/gold-1st.png'
import secondPosition from '../assets/leaderboard/gold-2nd.png'
import thirdPosition from '../assets/leaderboard/gold-3rd.png'
// PLAYERS //
import proCook from '../assets/leaderboard/ranking-proCook.png'
import emeka12 from '../assets/leaderboard/ranking-emeka12.png'
import iLuvsuya from '../assets/leaderboard/ranking-iLuvsuya.png'


// RANK BOARD SECTION //
import RankBoard from '../components/RankingBoard'
import boardiluvsuya from '../assets/leaderboard/board-iluvsuya.png'
import boardemeka12 from '../assets/leaderboard/board-emeka12.png'
import boardproCook from '../assets/leaderboard/board-proCook.png'
import boardchefChi from '../assets/leaderboard/board-chefChi.png'


function Leaderboard () {
    return (

        <main>
            {/* RANKING CARDS SECTION */}
            <section id='rankingCards-section'>
                <RankingCards 
                    className = "rankCards"
                    id = "second-place" 
                    rankImage={secondPosition}
                    playerImage={proCook}
                    name= "Pro Cook"
                    points= {2776}
                
                />
                
                {/* CARD 2 */}
                <RankingCards 
                    className = "rankCards"
                    id = "first-place" 
                    rankImage={firstPosition}
                    playerImage={emeka12}
                    name= "Emeka12"
                    points= {3045}
                
                />

                {/* CARD 3 */}
                <RankingCards 
                    className = "rankCards"
                    id = "third-place" 
                    rankImage={thirdPosition}
                    playerImage={iLuvsuya}
                    name= "iluvsuya"
                    points= {1988}
                
                />
            </section>


            {/* RANKING BOARD SECTION */}
            <section id='rankBoard-section'>
                {/* rank-1 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardiluvsuya}
                    name = "iLuvsuya"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                    
                />

                {/* rank-2 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardemeka12}
                    name = "Emeka12"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-3 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardproCook}
                    name = "Pro Cook"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-4 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardchefChi}
                    name = "Chefchi"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-5 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardproCook}
                    name = "Pro Cook"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-6 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardiluvsuya}
                    name = "iLuvsuya"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-7 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardproCook}
                    name = "Mama Ngozi"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-8 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardchefChi}
                    name = "Chefchi"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-9 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardproCook}
                    name = "Pro Cook"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-10 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardiluvsuya}
                    name = "iLuvsuya"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-11 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardproCook}
                    name ="Mama Ngozi"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-12 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardchefChi}
                    name = "Chefchi"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"

                />

                {/* rank-13 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardproCook}
                    name = "Pro Cook"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-14 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardiluvsuya}
                    name = "iLuvsuya"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-15 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardemeka12}
                    name = "Emeka12"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-16 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardproCook}
                    name ="Pro Cook"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-17 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardchefChi}
                    name = "Chefchi"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-18 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardemeka12}
                    name ="Emeka12"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />

                {/* rank-19 */}
                <RankBoard 
                    starIcon = {<i className="fa-solid fa-star"></i>}
                    playerImage = {boardiluvsuya}
                    name = "iLuvsuya"
                    points = {2776}
                    progress = {50}
                    className = "rank-row"
                />
            </section>
        </main>
    )
}

export default Leaderboard
