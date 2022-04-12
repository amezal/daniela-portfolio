import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './QuieroCompartir.scss';

const QuieroCompartir = () => {
  return (
    <section className="quiero-compartir">
      <div className="content">
        <h2>Quiero compartir este conocimiento contigo</h2>
        <p>
          Si no tienes tiempo para hacer marketing y no sabes
          por dónde empezar, escríbeme y te mostraré cuáles
          son los pasos a seguir para que no te domine el
          marketing y que juntos tomemos el control.
        </p>
      </div>
      <StaticImage
        src="../assets/images/QuieroCompartir.jpg"
        className="banner"
        imgClassName="banner__img"
        quality={100}
      />
    </section>
  )
}

export default QuieroCompartir;