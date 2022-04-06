import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './BannerAboutMe.scss';

const BannerAboutMe = () => {
  return (
    <section className="banner-aboutme">
      <div className="content">
        <h1>Hagamos que tu marca conecte con las personas,</h1>
        <p>Desde la estrategia, <br /> hasta la implementación.</p>
      </div>
      <StaticImage
        src="../assets/images/Banner_sobremi.jpg"
        className="banner"
        imgClassName="banner__img"
        quality={100}
      />
    </section>
  )
}

export default BannerAboutMe;