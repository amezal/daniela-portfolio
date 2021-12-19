import React, { useEffect, useRef } from 'react'
import './Services.css';
import Estrategia from '/src/assets/svg/Estrategia.svg';
import Copy from '/src/assets/svg/Copy.svg';
import Social from '/src/assets/svg/Social.svg';

function Services() {

  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.scrollLeft = myRef.current.firstChild.offsetWidth - 5;
    }
  }, [myRef]);



  return (
    <section id="services" className="services">
      <h2>Mis Servicios</h2>
      <p>Te brindaré las ideas que llevarán a tu marca al siguiente nivel, sin importar tu industria o el tamaño de tu empresa,
        crearé soluciones a tu medida en las siguientes áreas:</p>
      <div ref={myRef} className="services-list">
        <div className="service">
          <Estrategia />
          <h3>Estrategias de marca</h3>
          <p>Tengo un plan de acción que garantizará el cumplimiento de tus objetivos.</p>
          <button>Leer más</button>
        </div>
        <div className="service">
          <Copy />
          <h3>Copywriting & Diseño</h3>
          <p>Escribo los textos más persuasivos y diseño una imagen sólida para tu marca.</p>
          <button>Leer más</button>
        </div>
        <div className="service">
          <Social />
          <h3>Social & Google Ads</h3>
          <p>Hago llegar tus mensajes a los usuarios con los que deseas conectar.</p>
          <button>Leer más</button>
        </div>
      </div>
    </section>
  )
}

export default Services