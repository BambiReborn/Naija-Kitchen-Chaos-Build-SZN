import JoinImage from '../../assets/community/join-today-img.png'

function CommunityJoin () {
    return (
        <div className="joinToday">

            <div className="joinTodayLeft">
                <div className="joinTextContainer">
                    <div className="joinHeadingCont">
                        <p className="joinHeadingText">COOK TOGETHER, WIN TOGETHER</p>
                        <h3 className="joinHeading">Join Naija's Top Cooking Game <br /><span>Community Today</span></h3>
                    </div>

                    <p className="joinText">Naija Kitchen chaos is a one of Nigeria’s top cooking game where you can connect with fellow chefs, food enthusiats, share recipes, join events, and complete cooking challenges. From Jollof battles to Suya showdowns - Naija Kitchen chaos community is always lit.</p>
                </div>

                <button className="primaryButton">JOIN COMMUNITY</button>
            </div>

            <div className="joinTodayImage">
                <img src={JoinImage} alt="joinTodayImage" />
            </div>
        </div>
    );
}

export default CommunityJoin