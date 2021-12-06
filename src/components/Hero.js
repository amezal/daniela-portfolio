import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <StaticImage src="../assets/images/woman.jpg"
        alt="woman"
        placeholder="blurred"
        className="hero-background" />
      <div className="hero-content">
        <h1>Optimiza tu estrategia de marca y aumenta tus ventas</h1>
        <p>Acompaño a tu marca en cualquiera de sus etapas, desde la estrategia de marketing, desarrollo de mensajes, hasta su exposición en medios digitales.</p>
        <div className="hero-buttons">
          <button id="contactar-ahora">
            <Link to="#contact">
              Contactar ahora
            </Link>

          </button>
          <button id="ir-a-servicios">
            <Link to="#services">
              Ir a Servicios
            </Link>

          </button>

        </div>
      </div>


    </section>
  )
}


