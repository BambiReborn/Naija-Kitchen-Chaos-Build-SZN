
// components/SurviveKitchen.tsx
import CTAButton from './CTAButton'

type SurviveKitchenProps = {
  image: string
}

function SurviveKitchen({ image }: SurviveKitchenProps) {
  return (
    <section id="surviveKitchen-section">

      {/* TEXT SIDE */}
      <div id="text-side">
        <h3>
          READY TO <br />
          <span style = {{color: '#FFB54D'}}>SURVIVE THE KITCHEN?</span>
        </h3>
        <p>Gather your friends and prove you are the ultimate Naija chef.</p>
      </div>

      {/* BTNS SIDE */}
      <div id="btn-side">
        <CTAButton text="PLAY NOW" href="#" className="playNow-btn" />
        <CTAButton
          text={<>DOWNLOAD DEMO <i className="fa-solid fa-arrow-down"></i></>}
          href="/download"
          internal
          className="downloadDemo-btn"
        />
      </div>

      {/* IMAGE SIDE */}
      <div id="image-side">
        <img src={image} alt="Boiling Pot" />
      </div>

    </section>
  )
}

export default SurviveKitchen