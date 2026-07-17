import React from "react";

type GameFtsCardsProp = {
    image: string;
    title: React.ReactNode;
    description: React.ReactNode;
    className?: string;
};

function GameFTsCards({
    image,
    title,
    description,
    className = "",
}: GameFtsCardsProp) {
    return (
        <div className={`gameFTCards ${className}`}>
            <img
                src={image}
                alt={typeof title === "string" ? title : "Game Feature"}
            />

            <div className="writeUp-div">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default GameFTsCards;