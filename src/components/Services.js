import React from 'react'
import './Services.css';

function Services() {
  return (
    <section className="services">
      <h2>Mis Servicios</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut.</p>
      <div className="services-list">
        <div className="service">
          <h3>Estrategias de marca</h3>
          <p>Lorem ipsum dolor, sit amet consectetur as adipisicing elit. Repellendus, et?</p>
          <button>Leer más</button>
        </div>
        <div className="service">
          <h3>Copywriting & Diseño</h3>
          <p>Lorem ipsum dolor, sit amet consectetur as adipisicing elit. Repellendus, et?</p>
          <button>Leer más</button>
        </div>
        <div className="service">
          <h3>Social & Google Ads</h3>
          <p>Lorem ipsum dolor, sit amet consectetur as adipisicing elit. Repellendus, et?</p>
          <button>Leer más</button>
        </div>
      </div>
    </section>
  )
}

export default Services