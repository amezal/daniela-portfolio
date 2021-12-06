import React, { useEffect, useRef } from 'react'
import './Services.css';

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
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut.</p>
      <div ref={myRef} className="services-list">
        <div className="service">
          <h3>Estrategias de marca</h3>
          <p>Tengo un plan de acción que garantizará el cumplimiento de tus objetivos.</p>
          <button>Leer más</button>
        </div>
        <div className="service">
          <h3>Copywriting & Diseño</h3>
          <p>Escribo los textos más persuasivos y diseño una imagen sólida para tu marca.</p>
          <button>Leer más</button>
        </div>
        <div className="service">
          <h3>Social & Google Ads</h3>
          <p>Hago llegar tus mensajes a los usuarios con los que deseas conectar.</p>
          <button>Leer más</button>
        </div>
      </div>
    </section>
  )
}

export default Services