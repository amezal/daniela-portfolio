import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './SoyDaniela.scss';

const SoyDaniela = () => {
  return (
    <section className="soy-daniela">
      <StaticImage
        src="../assets/images/Soy_Daniela_Herrera.jpg"
        className="banner"
        imgClassName="banner__img"
        quality={100}
      />
      <div className="content">
        <h2>Soy Daniela Herrera <br />
          Master en Marketing Digital desde hace más de 5 años
        </h2>
        <p>
          En todo este tiempo me he preparado para
          todas las estrategias y herramientas
          para hacer marketing de cualquier negocio
          y recomendarte las que funcionarán para tu tipo de empresa.
        </p>
      </div>
    </section>
  )
}

export default SoyDaniela;