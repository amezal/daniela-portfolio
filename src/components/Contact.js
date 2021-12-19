import React from 'react';
import './Contact.css';
import { StaticImage } from 'gatsby-plugin-image';
import Contacto1 from '/src/assets/svg/Contacto1.svg'
import Contacto2 from '/src/assets/svg/Contacto2.svg'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contáctame</h2>
      <p>Cuéntame cuál es tu siguiente reto y te brindaré todas las opciones que tienes para que tu marca destaque.</p>
      <form action="https://formsubmit.co/d238c6c743c84b0cf1c381edf663263c" method="POST">
        <input type="text" name="name" placeHolder="Nombre" required />
        <input type="email" name="email" placeHolder="E-mail" required />
        <div className="empresa-web">
          <input type="text" name="company" placeHolder="Empresa" />
          <input type="text" name="web" placeHolder="Web" />
        </div>
        <select name="service" id="service-input" required>
          <option value="" disabled selected>Servicio que te interesa</option>
          <option value="estrategias">Estrategias de marca</option>
          <option value="social">Social & Google Ads</option>
          <option value="copy">Copywriting & Diseño</option>
        </select>
        <textarea name="description" placeHolder="Cuéntame un poco de tu proyecto" cols="30" rows="6" required></textarea>
        <button type="submit">Cotizar ahora</button>
      </form>

      <div classname="contact-brackground">
        <Contacto1 className="bg-img" id="contacto1" />
        <Contacto2 className="bg-img" id="contacto2" />
      </div>
    </section>
  )
}

export default Contact;