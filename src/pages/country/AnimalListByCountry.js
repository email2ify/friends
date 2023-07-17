import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const AnimalListByCountry = () => {
  const [animals, setAnimals] = useState([]);
  const { country } = useParams();

  useEffect(() => {
    const fetchAnimalsByCountry = async () => {
      try {
        const response = await axios.get(`animals/countries/${country}/`);
        setAnimals(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimalsByCountry();
  }, [country]);

  return (
    <>
      <h1>Animals that can be found in {country}</h1>
      <Row>
        {animals.map((animal) => (
          <Col key={animal.id} sm={6} md={4} lg={4} className="mb-4">
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
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AnimalListByCountry;
