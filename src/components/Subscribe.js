import React from 'react';
import './Subscribe.css';

function Subscribe() {

  return (
    <section className="subscribe">
      <div className="subscribe-text">
        <h2>Suscríbete</h2>
        <p>Recibe a tu correo todas las actualizaciones sobre marketing digital.</p>
      </div>
      <form action="">
        <input type="text" placeholder="Escribe tu email" />
      </form>
    </section>
  )

}

export default Subscribe;