import React from 'react';
import './Brands.css';
import { StaticImage } from 'gatsby-plugin-image';
import loadable from '@loadable/component';

const Carousel = loadable(() => import('../components/Carousel'))

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

        <Carousel />

      </section>
      <iframe id="brands-video" src="https://www.youtube.com/embed/q5RmW6vhMVM?autoplay=1&controls=0&rel=0&loop=1&playlist=q5RmW6vhMVM&mute=1&showinfo=0&modestbranding=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
    </>
  )
}

export default Brands;