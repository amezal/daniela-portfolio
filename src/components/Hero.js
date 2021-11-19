import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Titular</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate tenetur quos nisi sapiente sit adipisci!</p>
        <div className="hero-buttons">
          <button>Contactar ahora</button>
          <button>Ir a Servicios</button>
        </div>
      </div>
      <img src="https://picsum.photos/300" alt="" />
    </section>
  )
}


