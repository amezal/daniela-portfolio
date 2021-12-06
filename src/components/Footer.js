import React from 'react'
import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { Link } from 'gatsby';

function Footer() {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div>
          <img src="https://picsum.photos/150/50" alt="image" />
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna </p>
          <ul className="footer-socials">
            <li>
              <a href="https://www.instagram.com/elar.mando">
                <FaInstagram className="footer-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/elar.mando">
                <FaLinkedinIn className="footer-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/elar.mando">
                <FaBehance className="footer-icon" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer-pages">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/services">
              Sobre mi
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom-footer">
        <p>Política de Privacidad</p>
        <p>Copyright</p>
      </div>
    </footer>
  )
}

export default Footer