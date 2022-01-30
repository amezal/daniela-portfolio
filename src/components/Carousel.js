import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import Claro from '../assets/svg/Claro.svg';
import Walmart from '../assets/svg/Walmart.svg';
import Flor from '../assets/svg/Flor.svg';
import Hispamer from '../assets/svg/Hispamer.svg';
import Molino from '../assets/svg/Molino.svg';


function Carousel() {
  return (<InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          showSides: true,
          sideSize: 0.2,
          slidesSpacing: 10,
          slidesToScroll: 2,
          slidesToshow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          showSides: true,
          sideSize: 0.5,
          slidesSpacing: 20,
          slidesToScroll: 2,
          slidesToshow: 3,
        }
      }
    ]}
    lazyLoad={false}
    autoCycle={true}
    cycleInterval={3000}
    showSides={true}
    sidesOpacity={1}
    slidesSpacing={30}
    sideSize={2}
    slidesToScroll={3}
    slidesToShow={2}
  // scrollOnDevice={true}
  >
    <div>
      <Claro id="claro" />
    </div>
    <div id="walmart">
      <Walmart />
    </div>
    <div>
      <Flor id="flor" />
    </div>
    <div >
      <Hispamer id="hispamer" />
    </div>
    <div >
      <Molino id="molino" />
    </div>
  </InfiniteCarousel>
  );
}

export default Carousel;
