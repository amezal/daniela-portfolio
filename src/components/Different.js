import React from 'react';
import './Different.css';

function Different() {
  return (
    <section className="different">
      <img src="https://picsum.photos/500" alt="" />
      <div className="differences">
        <h2>¿Qué me hace diferente?</h2>
        <div className="difference">
          <img src="https://picsum.photos/50" alt="" />
          <div>
            <h3>Subtitulo 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
          </div>
        </div>
        <div className="difference">
          <img src="https://picsum.photos/50" alt="" />
          <div>
            <h3>Subtitulo 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
          </div>
        </div>
        <div className="difference">
          <img src="https://picsum.photos/50" alt="" />
          <div>
            <h3>Subtitulo 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
          </div>
        </div>
        <button>Conocer más</button>
      </div>

    </section>
  )
}

export default Different