import React from "react";
import {Row, Col} from "react-bootstrap";

const HeroSection = () => {
    return(<>
        {/* Hero Section */}
      <section className="hero main">
          <Row>
            <Col>
              <h1>FRDS-AFRICA WILD LIFE</h1>
              {/* <h2></h2> */}
                <p>Africa is home to a diverse range of wildlife,including some of the 
                    most iconic and charismatic animals 
                    in the world. <br /> Some of the most well-known African animals includes   
                    Gorillas,Lions,Hippos,Zebras and so on found in the forests of central Africa.<br /> 
                    <br />Contribute your amazing journey and experience in the wildlife and view feeds
                    <br /> 
                </p>
                <a href="/signin">
                    <button className="btn btn-primary">Get Started</button>
                </a>
            </Col>
          </Row>
      </section>
    </>);
}
export default HeroSection;