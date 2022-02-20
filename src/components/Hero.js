import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import scrollTo from 'gatsby-plugin-smoothscroll';
import './Hero.css';

const BackgroundSection = ({ className }) => {

}

export default function Hero() {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "BannerPrincipal.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageData = data.desktop.childImageSharp.fluid;

  console.log(imageData);

  return (
    <section className="hero">
      <BackgroundImage
        className='hero-background'
        fluid={imageData}
        backgroundColor={`#e9e8e2`}
        Tag='div'
        id='hero-bg'
      >

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
      </BackgroundImage>
    </section>
  )
}


