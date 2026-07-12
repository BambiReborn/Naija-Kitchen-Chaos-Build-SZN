
type GameFtsCardsProp = {
    image: string
    title: string
    description: string
    className: string
}

function GameFTsCards ({image, title, description, className}: GameFtsCardsProp) {
    return (
        <div className={`gameFTCrads ${className}`}>
            <img src={image} alt={title} />

            <div className="writeUp-div">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default GameFTsCards