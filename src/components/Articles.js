import React from 'react';
import { Link } from 'gatsby'
import './Articles.css';

function Articles() {
  return (
    <section className="articles">
      <h2>Últimos artículos</h2>
      <div className="actual-articles">
        <div className="article">
          <img src="https://picsum.photos/300/200" alt="image" />
          <h3>Subtitulo 1</h3>
          <p>Lrem ipsum dolor sit amet, consetetuer adipiscing, elit, sed diam</p>
          <Link to="/">Leer más</Link>
        </div>
        <div className="article">
          <img src="https://picsum.photos/300/200" alt="image" />
          <h3>Subtitulo 2</h3>
          <p>Lrem ipsum dolor sit amet, consetetuer adipiscing, elit, sed diam</p>
          <Link to="/">Leer más</Link>
        </div>
        <div className="article">
          <img src="https://picsum.photos/300/200" alt="image" />
          <h3>Subtitulo 3</h3>
          <p>Lrem ipsum dolor sit amet, consetetuer adipiscing, elit, sed diam</p>
          <Link to="/">Leer más</Link>
        </div>
      </div>
    </section>
  )
}

export default Articles