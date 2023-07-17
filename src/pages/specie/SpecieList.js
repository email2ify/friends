import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get("animals");
        setAnimals(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <Row>
      {animals.map((animal) => (
        <Col key={animal.id} sm={6} md={4} lg={4} className="mb-4">
          <div className="item">
            <Link to={`/specie/${animal.slug}`} className="wildlife-item">
              <img
                src={animal.image}
                loading="lazy"
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
        </Col>
      ))}
    </Row>
  );
};

export default AnimalList;
