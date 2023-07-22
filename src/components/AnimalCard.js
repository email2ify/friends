import React from 'react';
import { Link } from "react-router-dom";

export default function AnimalCard({ animal }) {
    return (
        <div className="item">
            <Link to={`/specie/${animal.slug}`} className="wildlife-item">
                <img
                    src={animal.image}
                    alt="Wildlife"
                    className="carousel-image"
                    onDragStart={(e) => e.preventDefault()}
                    role="presentation"
                />
                <div className="carousel-text text-white">
                    <h3>{animal.name}</h3>
                    <p>{animal.description}</p>
                </div>
            </Link>
        </div>
    )
}
