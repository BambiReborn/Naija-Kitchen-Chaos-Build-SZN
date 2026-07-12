type ChefCardsProps = {
  image: string
  name: string
  role: string
  description: string
}

function ChefCards({ image, name, role, description }: ChefCardsProps) {
  return (
    <div className="cards">
        <img src={image} alt={name} />
        <div className="writeUp-wrapper">
            <h3>{name}</h3>
            <h4>{role}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChefCards