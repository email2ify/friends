import React from "react";
import {Row, Col} from "react-bootstrap";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import urga from "./../../assets/urga.png";
import soso from "./../../assets/soso.png";
import lion from "./../../assets/lion.png";
import zebbra from "./../../assets/zebbra.png";

const handleDragStart = (e) => e.preventDefault();

// /**
//  *Breakpoint for Alice carousel: i.e number of items to display at a time based on device width
// */ 
// const responsive = {
//   1024: { items: 1 ,  itemsFit: 'contain',},
// }

/**
 * Demo items for featrue carousel: This is used as items of AliceCarousel
 */
const items =[
  <div className="item">
    <div href="/" className="force-fit " style={{maxHeight:'600px'}}>
      <img src={urga} alt="Wildlife" className="w-100" style={{objectFit: 'cover'}} 
        onDragStart={handleDragStart} role="presentation" 
      />
    </div>
  </div>,
  <div className="item">
    <div href="/" className="force-fit">
      <img src={soso} alt="Wildlife" className="w-100" style={{objectFit: 'cover'}} 
        onDragStart={handleDragStart} role="presentation" 
      />
    </div>
  </div>,
  <div className="item">
    <div href="/" className="force-fit">
      <img src={lion} alt="Wildlife" className="w-100" style={{objectFit: 'cover'}} 
        onDragStart={handleDragStart} role="presentation" 
      />
    </div>
  </div>,
  <div className="item">
    <div href="/" className="force-fit">
      <img src={zebbra} alt="Wildlife" className="w-100" style={{objectFit: 'cover'}} 
        onDragStart={handleDragStart} role="presentation" 
      />
    </div>
  </div>
]

const SpecieDetails = ()=>{
  return(<>
    <Row>
      <Col className="">
        <div className="carousel-container">
          <AliceCarousel
            // responsive={responsive}
            keyboardNavigation
            autoPlayInterval={6000}
            animationDuration={1000}
            disableDotsControls
            autoPlay
            infinite
            mouseTracking
            items={items}
            controlsStrategy="alternate"
            buttonsDisabled={true} // Disable default buttons
            renderPrevButton={() => (
              <buttton className="btn-none mid-left-float">
                <i className="fa-solid fa-circle-chevron-left fa-prm-color"></i>
              </buttton>
            )}
            renderNextButton={() => (
            <button className="btn-none mid-right-float ">
              <i className="fa-solid fa-circle-chevron-right fa-prm-color"></i>
            </button>
            )}
          />
        </div>
      </Col>
    </Row>
    <Row>
      <Col  md={6}>
        <h2>About the specie</h2>
        <p>
          Description here
        </p>
      </Col>
    </Row>
  </>)
}


export default SpecieDetails;