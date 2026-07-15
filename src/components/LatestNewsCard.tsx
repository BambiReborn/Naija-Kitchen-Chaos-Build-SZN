
type LatestNewsCardProps = {
    image: string
    author: string
    date: string
    description: string
    readMoreLink: string
    className: string
}

function LatestNewsCard ({ image, author, date, description, readMoreLink, className }: LatestNewsCardProps) {
    return (
        <div className={`newsCard ${className}`}>
            <img src={image} alt="Latest News" />

            <div className="cardInfo">
                <h4><i className="fa-regular fa-user"></i> {author}</h4>
                <div className="cardInfo-divider"></div>
                <h4><i className="fa-regular fa-calendar"></i> {date}</h4>
            </div>

            <p>{description}</p>

            <a href={readMoreLink} target="_blank">
                READ MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    )
}

export default LatestNewsCard