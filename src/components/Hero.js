import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <StaticImage src="../assets/images/BannerPrincipal.jpg"
        alt="Banner Principal"
        style={{ position: "absolute" }}
        placeholder="blurred"
        className="hero-background" />
      <div className="hero-content">
        <h1>Optimiza tu estrategia de marca y aumenta tus ventas</h1>
        <p>Acompaño a tu marca en cualquiera de sus etapas, desde la estrategia de marketing, desarrollo de mensajes, hasta su exposición en medios digitales.</p>
        <div className="hero-buttons">
          <button id="contactar-ahora" onClick={() => scrollTo("#contact")}>
            Contactar ahora
          </button>
          <button id="ir-a-servicios" onClick={() => scrollTo("#services")}>
            Ir a Servicios
          </button>

        </div>
      </div>
    </section>
  )
}


