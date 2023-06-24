import React from "react";

import {Row, Col} from "react-bootstrap";
import HeroSection from "../../components/MainPage";
import FeatureCarousel from "./FeatureCarousel";
import ConservationSection from "./ConservationSection";

/**
 * Landing page component
 * @returns React JSX component
 */
export const LandingPage=()=>{

  return(<>
  <Row>
    <Col className="py-2 p-0 p-lg-2">
      <HeroSection />
      <FeatureCarousel />
      <ConservationSection />
    </Col>
  </Row>
  </>)
}

