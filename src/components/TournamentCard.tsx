

type TournamentCardProps = {
    player1Image: string
    player2Image: string
    status: 'UPCOMING' | 'FINISHED'
    score: string
    matchTitle: string
    date: string
    youtubeLink: string
    instagramLink: string
    className: string
}

function TournamentCard ({player1Image, player2Image, status, score, matchTitle, date, youtubeLink, instagramLink, className}: TournamentCardProps) {
    return (
        <div className = {`tournamentCard ${status === 'UPCOMING' ? 'upcoming' : 'FINISHED'} ${className}`}>
            {/* LEFT SIDE */}
            <div className="players-side">
                <img src={player1Image} alt="Player 1" />
                <span className="vs-text">V<span className="vs-slash">/</span>S</span>
                <img src={player2Image} alt="Player 2" />
            </div>

            {/* DIVIDER */}
            <div className = "card-divider"></div>

            {/* RIGHT SIDE */}
            <div className="tournament-info">
                <div className="tournament-badges">
                    <span className={`status-badge ${status === 'UPCOMING' ? 'upcoming' : 'finished'}`}>
                        {status}
                    </span>
                    <span className="score-badge">{score}</span>
                </div>

                <h3>{matchTitle}</h3>
                <p>{date}</p>

                <div className="tournament-socials">
                    <a href={youtubeLink} target="_blank">
                        <i className="fa-brands fa-youtube"></i> Youtube
                    </a>
                    <a href={instagramLink} target="_blank">
                        <i className="fa-brands fa-instagram"></i> Instagram
                    </a>
                </div>
            </div>
        </div>


    )
}

export default TournamentCard