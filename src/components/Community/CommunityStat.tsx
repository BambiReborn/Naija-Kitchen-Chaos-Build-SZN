import GameImg from '../../assets/community/stat-game-icon.png'
import CommunityImg from '../../assets/community/stat-community-icon.png'
import FoodImg from '../../assets/community/stat-food-icon.png'
import StarImg from '../../assets/community/stat-star-icon.png'
import AvatarImg from '../../assets/community/stat-bottom-img.png'


function CommunityStat () {
    return (
        <section className="communityStat">

            <div className="topLayerCont">
                <div className="statCard">
                    <img src={GameImg} alt="gameImage" />

                    <div className="statCardTextCont">
                        <h4 className="statCardHeading">25+</h4>
                        <p className="statCardText">ExcitingLevels</p>
                    </div>
                </div>

                <div className="statCard">
                    <img src={CommunityImg} alt="communityImage" />

                    <div className="statCardTextCont">
                        <h4 className="statCardHeading">50K+</h4>
                        <p className="statCardText">Players Worldwide</p>
                    </div>
                </div>
            </div>

            <div className="bottomLayerCont">
                <div className="statCard">
                    <img src={FoodImg} alt="FoodImage" />

                    <div className="statCardTextCont">
                        <h4 className="statCardHeading">100+</h4>
                        <p className="statCardText">Authentic Recipes</p>
                    </div>
                </div>

                <div className="bottomImage">
                    <img src={AvatarImg} alt="avatarImage" />
                </div>

                <div className="statCard">
                    <img src={StarImg} alt="starImage" />

                    <div className="statCardTextCont">
                        <h4 className="statCardHeading">4.9</h4>
                        <p className="statCardText">Community Rating</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default CommunityStat