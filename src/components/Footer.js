import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark py-3 text-light ">
      <Container>
        <Row className="small">
          <Col sm={4} md={4}>
            <h5>Find Us</h5>
            <a href="https://www.google.com/maps/search/123+street,+V%C3%A4xj%C3%B6+City/@56.8896657,14.7117419,12z/data=!3m1!4b1?entry=ttu" className="text-white">
              <i className="fas fa-map-marker-alt"></i> 123 Street, Växjö City
            </a>

          </Col>
          <Col sm={4} md={4}>
            <h5>Call Us</h5>
            <a href="tel:+46730000000" className="text-white">
              <i className="fas fa-phone"></i> +46730000000
            </a>
          </Col>
          <Col sm={4} md={4}>
            <h5>Email Us</h5>
            <a href="mailto:email2ify@yahoo.com" className="text-white">
              <i className="fas fa-envelope"></i> email2ify@yahoo.com
            </a>
          </Col>
        </Row>
        <hr className="bg-white"></hr>
        <Row>
          <Col sm={4}>
            <h5>Follow Us</h5>
            <ul className="small list-unstyled">

              <a rel="noreferrer" target="_blank" className="text-white"
                href="https://www.facebook.com"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>


              <a rel="noreferrer" target="_blank" className="text-white"
                href="https://www.twitter.com"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>


              <a rel="noreferrer" target="_blank" className="text-white"
                href="https://www.instagram.com"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </ul>

          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
