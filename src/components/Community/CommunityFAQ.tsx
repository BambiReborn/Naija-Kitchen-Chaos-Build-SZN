import ArrowIcon from '../../assets/community/arrow-down.svg'

function CommunityFAQ () {
    return (
        <section className="communityQuestion">
            <h3 className="questionHeading">COMMUNITY FAQ</h3>

            <div className="questionList">
                <div className="questionCard">
                    <p className="questionText">How do I join a team</p>
                    <img src={ArrowIcon} alt="arrowDown" />
                </div>

                <div className="questionCard">
                    <p className="questionText">Is Voice Chat Supported?</p>
                    <img src={ArrowIcon} alt="arrowDown" />
                </div>

                <div className="questionCard">
                    <p className="questionText">Can I be Part of the tournament host?</p>
                    <img src={ArrowIcon} alt="arrowDown" />
                </div>

                <div className="questionCard">
                    <p className="questionText">How do i report a player?</p>
                    <img src={ArrowIcon} alt="arrowDown" />
                </div>
            </div>

        </section>
    );
}

export default CommunityFAQ