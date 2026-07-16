import ItemCheck from '../../assets/community/item-check.svg'
import CardOne from '../../assets/community/card-one.png'
import CardTwo from '../../assets/community/card-two.png'
import CardThree from '../../assets/community/card-three.png'

function CommunityCards () {
    return (
        <section className="communityCardLists">

            <div className="communityCardCont">
                <div className="communityCard">
                    <div className="communityCardTextCont">
                        <h5 className="communityCardHeading">WEEKLY COOKING CHALLENGES</h5>
                        <p className="communityCardText">Compete in themed events every week</p>
                    </div>

                    <div className="communityCardItems">
                        <div className="cardItemTop">
                            <div className="cardItem">
                                <img src={ItemCheck} alt="checkIcon" />
                                <p className="cardItemText">Suya Rush</p>
                            </div>

                            <div className="cardItem">
                                <img src={ItemCheck} alt="checkIcon" />
                                <p className="cardItemText">Jollof Showdown</p>
                            </div>
                        </div>

                        <div className="cardItemBottom">
                            <div className="cardItem">
                                <img src={ItemCheck} alt="checkIcon" />
                                <p className="cardItemText">Egusi Master Challenge</p>
                            </div>

                            <div className="cardItem">
                                <img src={ItemCheck} alt="checkIcon" />
                                <p className="cardItemText">Small Chops Sprint</p>
                            </div>
                        </div>
                    </div>

                    <div className="communityCardImage">
                        <img src={CardOne} alt="cardOneImage" />
                    </div>

                    <button className="tertiaryButton">VIEW CHALLENGES</button>
                </div>

                <div className="communityCard">
                    <div className="communityCardTextCont">
                        <h5 className="communityCardHeading">FIND THE COOKING TEAMS</h5>
                        <p className="communityCardText">Join squads to complete competitive kitchen missions</p>
                    </div>

                    <div className="communityCardItems">
                        <div className="cardItemTop">
                            <div className="cardItem">
                                <img src={ItemCheck} alt="checkIcon" />
                                <p className="cardItemText">Private Kitchens</p>
                            </div>

                            <div className="cardItem">
                                <img src={ItemCheck} alt="checkIcon" />
                                <p className="cardItemText">Voice Chat Support</p>
                            </div>
                        </div>

                        <div className="cardItemBottom">
                            <div className="cardItem">
                                <img src={ItemCheck} alt="checkIcon" />
                                <p className="cardItemText">Weekly Tournaments</p>
                            </div>

                            <div className="cardItem">
                                <img src={ItemCheck} alt="checkIcon" />
                                <p className="cardItemText">Team Matchmaking</p>
                            </div>
                        </div>
                    </div>

                    <div className="communityCardImage two">
                        <img src={CardTwo} alt="cardTwoImage" />
                    </div>

                    <button className="tertiaryButton">FIND A TEAM</button>
                </div>

                <div className="communityCard">
                    <div className="communityCardTextCont">
                        <h5 className="communityCardHeading">SHARE YOUR BEST MEALS</h5>
                        <p className="communityCardText">Upload screenshots of your dishes and earn likes</p>
                    </div>

                    <div className="communityCardItems">
                        <div className="cardItemTop">
                            <div className="cardItem">
                                <img src={ItemCheck} alt="checkIcon" />
                                <p className="cardItemText">XP Rewards</p>
                            </div>

                            <div className="cardItem">
                                <img src={ItemCheck} alt="checkIcon" />
                                <p className="cardItemText">Community Badges</p>
                            </div>
                        </div>

                        <div className="cardItemBottom">
                            <div className="cardItem">
                                <img src={ItemCheck} alt="checkIcon" />
                                <p className="cardItemText">Featured Chef Spotlights</p>
                            </div>

                        </div>
                    </div>

                    <div className="communityCardImage three">
                        <img src={CardThree} alt="cardThreeImage" />
                    </div>

                    <button className="tertiaryButton">SHARE NOW</button>
                </div>

            </div>
        </section>
    );
}

export default CommunityCards