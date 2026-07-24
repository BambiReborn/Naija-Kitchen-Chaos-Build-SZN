

type RankingCardsProps = {
    rankImage: string
    playerImage: string
    name: string
    points: number
    id: string
    className: string
}

function RankingCards ({rankImage, playerImage, name, points, id, className}: RankingCardsProps) {
    return (
        
        <div className={className} id = {id}>
            <div className="rankingcard-visual">
                <img src= {rankImage} className = 'rankImage' alt="Rank" />
                <img src= {playerImage} className = 'playerImage' alt= {name} />
            </div>

            <h3>{name}</h3>
            <p>{points} pts</p>
        </div>
    )
}


export default RankingCards