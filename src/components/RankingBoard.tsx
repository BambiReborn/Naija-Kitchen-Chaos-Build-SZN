

type RankBoardProps = {
    starIcon: React.ReactNode
    playerImage: string
    name: string
    points: number
    progress: number
    className: string
}

function RankBoard ({starIcon, playerImage, name, points, progress, className}: RankBoardProps) {
    return (

        <div className={className}>

            <div id='playerIcon-wrapper'>
                <div className="starIcon">
                    {starIcon}
                </div>

                <img
                    className="rankPlayer-image"
                    src={playerImage}
                    alt={name}
                />

                <h3 className="rankPlayer-name">
                    {name}
                </h3>
            </div>

            
            <div className="rankPoints">
                <span className="pointsText">
                    {points} Pts
                </span>

                <div className="progressBar">

                    <div
                        className="progressBar-fill"
                        style={{
                            width: `${progress}%`
                        }}
                    />

                </div>

            </div>

        </div>
    )
}


export default RankBoard