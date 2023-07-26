import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimalCard from '../../components/AnimalCard';
import { Row, Col } from "react-bootstrap";

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    axios.get('animals/search/', {
      params: { q: searchTerm }
    })
      .then(response => {
        const animals = response.data;
        setSearchResults(animals);
        setError(null); // Clear any previous error messages on successful search
      })
      .catch(error => {
        setError(error.response.data.detail); // Set the error message if no animals are found
      });
  };

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
    <>
      <Row className="my-4">
        <Col md={{ span: 12 }}>
          <div className="input-group">
            <input
              className="form-control mr-2 py-4"
              type="text"
              placeholder="Search wildlife..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
          </div>
        </Col>
      </Row>

      {/* Display error message if there's an error */}
      {error && (
        <div className="error-box d-flex flex-column text-danger mb-3 align-items-center">
          <div className="my-4"><h3>{error}</h3></div>
          <div><a href={`/specie`} className="btn btn-primary p-3">View Others</a></div>
        </div>
      )}

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div>
          <h4 className="search-header font-weight-bold mb-3">Search results for ‘{searchTerm}’:</h4>
          <Row>
            {searchResults.map(animal => (
              <Col key={animal.id} sm={6} md={4} lg={4} className="mb-4">
                <AnimalCard animal={animal} />
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Display all animals when there are no search results */}
      {searchResults.length === 0 && !error && (
        <div>
          <Row>
            {animals.map((animal) => (
              <Col key={animal.id} sm={6} md={4} lg={4} className="mb-4">
                <AnimalCard animal={animal} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default AnimalList;
