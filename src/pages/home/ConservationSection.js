import React from 'react';
import { Row, Col } from 'react-bootstrap';
import lios from "./../../assets/lios.png";
import two from "./../../assets/two.png";
import wo from "./../../assets/wo.png";
import ele from "./../../assets/ele.png";

const ConservationSection = () => {
  return (
    <div>
      {/* About Us Section */}
      <section className="about my-4">
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              We are passionate about wildlife conservation and education. Our platform aims to raise awareness
              and promote the protection of endangered species and their habitats.
            </p>
          </Col>
          <Col md={6} >
            <div style={{maxHeight:'360px'}} className="d-flex">
              <img  className="w-100" src={ele} alt="About" />

            </div>
          </Col>
        </Row>
      </section>

      {/* Explore Wildlife Section */}
      <section className="text-center my-5">
        <Row>
          <Col sm={12}>
            <h2>Explore Wildlife</h2>
            <p>Discover a wide range of wildlife species from different regions and habitats.</p>
          </Col>
          <Col md={{ span: 6, offset: 3 }}>
            <div className="input-group">
              <input  className="form-control" type="text" placeholder="Search wildlife..." />
              <button className="btn btn-primary">Search</button>
            </div>
          </Col>
        </Row>
      </section>

      {/* Conservation Efforts Section */}
      <section className="conservation-efforts">
        <Row>
          <Col>
            <h2>Conservation Efforts</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="conservation-item">
              <img src={lios} alt="Conservation" />
              <h3>Protecting Endangered Species</h3>
              <p>
                Learn about our ongoing projects aimed at conserving endangered species and their habitats.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="conservation-item">
              <img src={two} alt="Conservation" />
              <h3>Community Engagement</h3>
              <p>
                We collaborate with local communities to raise awareness and promote sustainable wildlife conservation.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="conservation-item">
              <img src={wo} alt="Conservation" />
              <h3>Support Our Cause</h3>
              <p>Contribute to our conservation efforts through donations and volunteering.</p>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default ConservationSection;
