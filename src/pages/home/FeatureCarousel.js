import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimalCard from '../../components/AnimalCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


/**
 * Breakpoint for Alice carousel: i.e number of items to display at a time based on device width
 */
const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 3, itemsFit: 'contain' },
};

const FeatureCarousel = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get("animals");
        const allAnimals = response.data.results;
        const randomAnimals = getRandomItems(allAnimals, 5);
        setAnimals(randomAnimals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimals();
  }, []);

  // Function to get random animals for the carousel
  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div>
      {animals.length > 0 ? (
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
            items={animals.map((animal) => (
              <AnimalCard animal={animal} />
            ))}
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
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FeatureCarousel;
