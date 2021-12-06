import React from 'react';
import './Different.css';
import { StaticImage } from 'gatsby-plugin-image';

function Different() {
  return (
    <section className="different">

      <StaticImage src="../assets/images/orangewoman.jpg"
        alt="Woman dressed in orange"
        placeholder="blurred"
        className="different-img"
        imgStyle={{ objectPosition: "80% 50%" }} />

      <div className="differences">
        <h2>Hazme parte de tu equipo</h2>
        <div className="difference">
          <img src="https://picsum.photos/50" alt="" />
          <div>
            <h3>Máster en Marketing Digital</h3>
            <p>Especialista en estrategias de marca en las diferentes plataformas digitales.</p>
          </div>
        </div>
        <div className="difference">
          <img src="https://picsum.photos/50" alt="" />
          <div>
            <h3>+8 años en la industria creativa</h3>
            <p>Trabajando de la mano de equipos de marketing y publicidad para marcas nacionales y regionales.</p>
          </div>
        </div>
        <div className="difference">
          <img src="https://picsum.photos/50" alt="" />
          <div>
            <h3>+30 artículos publicados</h3>
            <p>En importantes portales de marketing digital de la región.</p>
          </div>
        </div>
        <button>Conocer más</button>
      </div>

    </section>
  )
}

export default Different