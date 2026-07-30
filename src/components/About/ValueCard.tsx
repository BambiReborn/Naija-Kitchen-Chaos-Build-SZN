interface ValueCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ValueCard({
  image,
  title,
  description,
}: ValueCardProps) {
  return (
    <article className="value-card">

      {/* Value icon */}
      <div className="value-card-image">
        <img src={image} alt={title} />
      </div>

      {/* Value content */}
      <div className="value-card-content">

        <h3 className="value-card-title">
          {title}
        </h3>

        <p className="value-card-description">
          {description}
        </p>

      </div>

    </article>
  );
}