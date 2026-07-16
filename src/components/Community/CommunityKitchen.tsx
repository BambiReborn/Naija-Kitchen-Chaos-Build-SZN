import Food from '../../assets/community/cta-image.png'

function CommunityKitchen () {
    return (
        <section className="kitchen">
            <div className="kitchenTextCont">
                <h4 className="kitchenHeading">READY TO <span className="yellow">SURVIVE THE KITCHEN?</span></h4>
                <p className="kitchenText">Gather your friends and prove you are the ultimate Naija chef.</p>
            </div>

            <div className="kitchenButtonCont">
                <button className="primaryButton">PLAY NOW</button>
                <button className="secondaryButton">DOWNLOAD DEMO</button>
            </div>

            <img src={Food} alt="foodImage" />
        </section>

    );
}

export default CommunityKitchen