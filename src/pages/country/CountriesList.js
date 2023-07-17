import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAnimalsByCountry = async () => {
      try {
        const response = await axios.get(`animals/countries/`);
        setCountries(response.data);
        console.log(countries)
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimalsByCountry();
  });

  return (
    <>
      <Row>
        <h1 className="mb-4">List of countries with animals</h1>
        {countries.map((country) => (
          <Col key={country.id} sm={12} md={12} lg={12}>
            <div>
              <Link to={`/countries/${country}`}>
                <div>
                  <h3 className="bg-secondary text-white p-3">{country}</h3>
                </div>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CountriesList;
