import Food from '../../assets/community/cta-image.png'

function CommunityKitchen () {
    return (
        <section className="kitchen">
            <div className="kitchenTextButton">
                <div className="kitchenTextCont">
                <h4 className="kitchenHeading">READY TO <br /><span className="yellow">SURVIVE THE KITCHEN?</span></h4>
                <p className="kitchenText">Gather your friends and prove you are the ultimate Naija chef.</p>
            </div>

            <div className="kitchenButtonCont">
                <button id='playNow'>PLAY NOW</button>
                <button id='download-demo'>DOWNLOAD DEMO</button>
            </div>

            </div>

            <img src={Food} alt="foodImage" />
        </section>

    );
}

export default CommunityKitchen