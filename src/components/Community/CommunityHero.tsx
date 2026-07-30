import TwitchIcon from '../../assets/community/twitch-icon.svg'
import InstagramIcon from '../../assets/community/instagram-icon.svg'

function CommunityHero () {
    return (
        <div className="communityHero">
            
            <h1 className="communityHeroHeading">JOIN THE <br /> NAIJA KITCHEN <br /> CHAOS <span>COMMUNITY</span></h1>

            <div className="communityButtonCont">
                <button className="primaryButton">
                    <img src={TwitchIcon} alt="Twitch Icon" />
                    JOIN TWITCH</button>
                <button className="secondaryButton">
                    <img src={InstagramIcon} alt="Instagram Icon" />
                    JOIN INSTAGRAM</button>
            </div>

        </div>
    );
}

export default CommunityHero