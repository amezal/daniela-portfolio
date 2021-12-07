import React from 'react';
import './Brands.css';
import { StaticImage } from 'gatsby-plugin-image';

function Brands() {



  return (
    <>
      <section className="brands">
        <StaticImage src="../assets/images/brands.jpg"
          alt="brands"
          placeholder="blurred"
          className="brands-background"
          style={{ position: "absolute" }} />

        <h2>Marcas con las que he trabajado</h2>
        <div className="actual-brands">
          <img src="https://picsum.photos/150" alt="brand" className="brand" />
          <img src="https://picsum.photos/150" alt="brand" className="brand" />
          <img src="https://picsum.photos/150" alt="brand" className="brand" />
          <img src="https://picsum.photos/150" alt="brand" className="brand" />
          <img src="https://picsum.photos/150" alt="brand" className="brand" />
          <img src="https://picsum.photos/150" alt="brand" className="brand" />
          <img src="https://picsum.photos/150" alt="brand" className="brand" />

        </div>
      </section>
      <iframe id="brands-video" src="https://www.youtube.com/embed/q5RmW6vhMVM?autoplay=1&controls=0&rel=0&loop=1&playlist=q5RmW6vhMVM&mute=1&showinfo=0&modestbranding=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
    </>
  )
}

export default Brands;