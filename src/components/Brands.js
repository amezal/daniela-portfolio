import React, { useState } from 'react';
import './Brands.css';
import { StaticImage } from 'gatsby-plugin-image';
import InfiniteCarousel from 'react-leaf-carousel';
import Claro from '../assets/svg/Claro.svg';
import Walmart from '../assets/svg/Walmart.svg';
import Flor from '../assets/svg/Flor.svg';
import Hispamer from '../assets/svg/Hispamer.svg';
import Molino from '../assets/svg/Molino.svg';

function Brands() {

  return (
    <>
      <section className="brands">
        <StaticImage src="../assets/svg/Firma.png"
          alt="brands"
          placeholder="blurred"
          className="brands-background"
          style={{ position: "absolute" }}
          imgStyle={{ justifySelf: "flex-end", objectPosition: "100% 20%" }} />

        <h2>Marcas con las que he trabajado</h2>

        {/* <div className="actual-brands">
          <div className="brand" id="claro"><Claro /></div>
          <div className="brand" id="walmart"><Walmart /></div>
          <div className="brand" id="flor" ><Flor /></div>
          <div className="brand" id="hispamer"><Hispamer /></div>
          <div className="brand" id="molino" ><Molino /></div>
        </div> */}

        <InfiniteCarousel
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

      </section>
      <iframe id="brands-video" src="https://www.youtube.com/embed/q5RmW6vhMVM?autoplay=1&controls=0&rel=0&loop=1&playlist=q5RmW6vhMVM&mute=1&showinfo=0&modestbranding=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
    </>
  )
}

export default Brands;