import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

const SpecieDetails = () => {
  const [specieData, setSpecieData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchSpecieData = async () => {
      try {
        const response = await axiosReq.get(`animals/specie/${slug}/`);
        setSpecieData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSpecieData();
  }, [slug]);

  return (
    <>
      <Row>
        <Col className="">
          <div className="carousel-container">
            <img
              src={specieData?.image}
              alt="Wildlife"
              className="w-100"
              onDragStart={(e) => e.preventDefault()}
              role="presentation"
            />
          </div>
        </Col>
      </Row>
      <Row>

        <Col md={12} className="my-3">
          <h1 className="font-weight-bolder">{specieData?.name}</h1>
          <h5 className="mb-2"><u>About the specie</u></h5>
          <div className="text-container">
            {/* Displaying the countries the species can be found in */}
            <p className="mb-2">
              Mostly found in:{" "}
              {Array.isArray(specieData?.countries) ? (
                // If the countries return a list, render each country as a link
                specieData.countries.map((country, index) => (
                  <React.Fragment key={country}>
                    {index > 0 && ", "}
                    <Link to={`/countries/${country}`} className="btn btn-link">
                      {country}
                    </Link>
                  </React.Fragment>
                ))
              ) : (
                // If the countries return a single country, render it as a link
                <Link to={`/countries/${specieData?.countries}`} className="btn btn-link">
                  {specieData?.countries}
                </Link>
              )}
            </p>

            <p style={{ whiteSpace: 'pre-wrap', fontSize: '18px' }}>{specieData?.description}</p>
          </div>
        </Col>
      </Row>



    </>
  );
};

export default SpecieDetails;
