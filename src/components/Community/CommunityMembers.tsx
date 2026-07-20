import ArrowImg from '../../assets/community/arrow-right.svg'
import StarIcon from '../../assets/community/star-icon.svg'
import TobiImg from '../../assets/community/member-card-one.png'
import ChiImg from '../../assets/community/member-card-two.png'
import AdaImg from '../../assets/community/member-card-three.png'
import EmekaImg from '../../assets/community/member-card-four.png'

function CommunityMembers () {
    return (
        <section className="communityMembers">
            <div className="membersHeadline">
                <h6 className="membersHeading">FEATURED COMMUNITY MEMBERS</h6>
                <div className="membersTextCont">
                    <p className="membersText">VIEW ALL MEMBERS</p>
                    <img src={ArrowImg} alt="arrowImage" />
                </div>
            </div>

            <div className="membersCardCont">
                <div className="membersCardTop">
                    <div className="membersCard">
                        <img src={TobiImg} alt="profileImage" />
                        <div className="membersCardTextCont">
                            <p className="membersCardBold">Tobi</p>
                            <p className="memberCardNorm">Level 31</p>
                            <p className="memberCardYellow">iluvsuya</p>
                            <div className="textWithStar">
                                <img src={StarIcon} alt="starIcon" />
                                <p className="memberCardNorm"><span>2,890</span>points</p>
                            </div>
                        </div>
                    </div>

                    <div className="membersCard">
                        <img src={ChiImg} alt="profileImage" />
                        <div className="membersCardTextCont">
                            <p className="membersCardBold">Chi</p>
                            <p className="memberCardNorm">Level 39</p>
                            <p className="memberCardYellow">Chefchi</p>
                            <div className="textWithStar">
                                <img src={StarIcon} alt="starIcon" />
                                <p className="memberCardNorm"><span>3,560</span>points</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="membersCardBottom">
                    <div className="membersCard">
                        <img src={AdaImg} alt="profileImage" />
                        <div className="membersCardTextCont">
                            <p className="membersCardBold">Ada</p>
                            <p className="memberCardNorm">Level 22</p>
                            <p className="memberCardYellow">Pro Cook</p>
                            <div className="textWithStar">
                                <img src={StarIcon} alt="starIcon" />
                                <p className="memberCardNorm"><span>2,340</span>points</p>
                            </div>
                        </div>
                    </div>

                    <div className="membersCard">
                        <img src={EmekaImg} alt="profileImage" />
                        <div className="membersCardTextCont">
                            <p className="membersCardBold">Emeka</p>
                            <p className="memberCardNorm">Level 17</p>
                            <p className="memberCardYellow">Emeka12</p>
                            <div className="textWithStar">
                                <img src={StarIcon} alt="starIcon" />
                                <p className="memberCardNorm"><span>1,940</span>points</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default CommunityMembers