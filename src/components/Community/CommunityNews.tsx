import ArrowImg from '../../assets/community/arrow-right.svg'
import Jollof from '../../assets/community/jollof-image.png'
import Suya from '../../assets/community/suya-image.png'
import Egusi from '../../assets/community/egusi-image.png'
import Flag from '../../assets/community/flag-image.png'
import Emeka from '../../assets/community/member-card-four.png'
import Chi from '../../assets/community/member-card-two.png'
import Star from '../../assets/community/star-icon.svg'

function CommunityNews () {
    return (
        <section className="newsFeed">
            <div className="upcomingEvents">
                <div className="eventsHeadline">
                    <h6 className="eventsHeading">UPCOMING EVENTS</h6>
                    <div className="eventsTextCont">
                        <p className="eventsText">VIEW CALENDAR</p>
                        <img src={ArrowImg} alt="arrowIcon" />
                    </div>
                </div>

                <div className="eventsList">
                    <div className="eventsCard">
                        <div className="eventsCardMix">
                            <img src={Jollof} alt="jollofImage" />
                            <p className="cardMixText">Jollof Championship</p>
                        </div>
                        <p className="eventsCardText">Saturday</p>
                        <p className="eventCardYellow">Chef Apron</p>
                    </div>

                    <div className="eventsCard">
                        <div className="eventsCardMix">
                            <img src={Suya} alt="suyaImage" />
                            <p className="cardMixText">Suya Cook-Off</p>
                        </div>
                        <p className="eventsCardText">Tuesday</p>
                        <p className="eventCardYellow">2000 Coins</p>
                    </div>

                    <div className="eventsCard">
                        <div className="eventsCardMix">
                            <img src={Egusi} alt="egusiImage" />
                            <p className="cardMixText">Egusi Tournament</p>
                        </div>
                        <p className="eventsCardText">Friday</p>
                        <p className="eventCardYellow">Upgrade</p>
                    </div>

                    <div className="eventsCard">
                        <div className="eventsCardMix">
                            <img src={Flag} alt="flagImage" />
                            <p className="cardMixText">Independence Day Cookfest</p>
                        </div>
                        <p className="eventsCardText">October</p>
                        <p className="eventCardYellow">Badge</p>
                    </div>

                </div>
            </div>

            <div className="testimonials">
                <h6 className="eventsHeading">COMMUNITY TESTIMONIALS</h6>

                <div className="testimonialCardCont">
                    <div className="testimonialCard">
                        <div className="cardStars">
                            <img src={Star} alt="starIcon" />
                            <img src={Star} alt="starIcon" />
                            <img src={Star} alt="starIcon" />
                            <img src={Star} alt="starIcon" />
                            <img src={Star} alt="starIcon" />
                        </div>
                        <p className="testimonialText">“ I have made friends from different states and parts of Nigeria i have never  been to through Naija Kitchen Chaos Community”</p>
                        <div className="profilewithText">
                            <img src={Emeka} alt="emekaProfileImage" />
                            <p className="profileText">Emeka</p>
                        </div>
                    </div>

                    <div className="testimonialCard">
                        <div className="cardStars">
                            <img src={Star} alt="starIcon" />
                            <img src={Star} alt="starIcon" />
                            <img src={Star} alt="starIcon" />
                            <img src={Star} alt="starIcon" />
                            <img src={Star} alt="starIcon" />
                        </div>
                        <p className="testimonialText">“ I have made friends from different states and parts of Nigeria i have never  been to through Naija Kitchen Chaos Community”</p>
                        <div className="profilewithText">
                            <img src={Chi} alt="chiProfileImage" />
                            <p className="testimonialText">Chi</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default CommunityNews