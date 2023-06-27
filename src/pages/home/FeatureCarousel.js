import React from "react";

import {Row, Col} from "react-bootstrap";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import elep from "./../../assets/elep.png";
import gor from "./../../assets/gor.png";
import lion from "./../../assets/lion.png";
import zebbra from "./../../assets/zebbra.png";

const handleDragStart = (e) => e.preventDefault();

/**
 *Breakpoint for Alice carousel: i.e number of items to display at a time based on device width
*/ 
const responsive = {
  0: { items: 1},
  768: { items: 2,   },
  1024: { items: 3 ,  itemsFit: 'contain',},
}

/**
 * Demo items for featrue carousel: This is used as items of AliceCarousel
 */
const items =[
  <div className="item">
    <a href="/specie/elep" className="wildlife-item">
      <img src={elep} alt="Wildlife" className="carousel-image" 
        onDragStart={handleDragStart} role="presentation" 
      />
      <div className="carousel-text text-white">
        <h3>Elephants</h3>
        <p>The largest land mammals on earth and have  massive bodies, large ears, and long trunks.</p>
      </div>
    </a>
  </div>,
  <div className="item">
    <a href="/specie/elep" className="wildlife-item">
      <img src={gor} alt="Wildlife" className="carousel-image" 
        onDragStart={handleDragStart} role="presentation" 
      />
      <div className="carousel-text text-white">
      <h3>Gorilla</h3>
      <p>The largest of the great apes in the jungle, and they are known as stocky animals.</p>             
      </div>
    </a>
  </div>,
  <div className="item">
    <a href="/specie/lion" className="wildlife-item">
      <img src={lion} alt="Wildlife" className="carousel-image" 
        onDragStart={handleDragStart} role="presentation" 
      />
      <div className="carousel-text text-white">        
        <h3>Lion</h3>
        <p>An apex predator known for its power, beauty, and agility.</p>
      </div>
    </a>
  </div>,
  <div className="item">
    <a href="/specie/zebbra" className="wildlife-item">
      <img src={zebbra} alt="Wildlife" className="carousel-image" 
        onDragStart={handleDragStart} role="presentation" 
      />
      <div className="carousel-text text-white">
        <h3>Zebbra</h3>
        <p>They are know as African equines with distinctive black-and-white striped coats..</p>
      </div>
    </a>
  </div>
]

/**
 * Landing page component
 * @returns React JSX component
 */
const FeatureCarousel=()=>{
  return(<Row>
    <Col className="">
      <div className="carousel-container">
        <AliceCarousel
          responsive={responsive}
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
            <button className="btn-none mid-left-float">
              <i className="fa-solid fa-circle-chevron-left fa-prm-color"></i>
            </button>
          )}
          renderNextButton={() => (
          <button className="btn-none mid-right-float ">
            <i className="fa-solid fa-circle-chevron-right fa-prm-color"></i>
          </button>
          )}
        />
      </div>
    </Col>
  </Row>)
}

export default FeatureCarousel;
