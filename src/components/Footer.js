import React from 'react'
import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

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
        <div className="right-footer">
          <ul className="footer-pages">
            <li onClick={() => {
              if (document.querySelector('.hero') != null) {
                scrollTo(".hero");
              } else {
                navigate("/");
              }
            }}>
              Logo
            </li>
            <li onClick={() => {
              if (document.querySelector('#services') != null) {
                scrollTo("#services");
              } else {
                navigate("/#services");
              }
            }}>
              Servicios
            </li>
            <li>
              <Link to="/aboutme">
                Sobre mi
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/resources">
                Recursos
              </Link>
            </li>
            <li onClick={() => {
              if (document.querySelector('#contact') != null) {
                scrollTo("#contact");
              } else {
                navigate("/#contact");
              }
            }}>
              Contacto
            </li>
          </ul>
          <div className="roastbrief">
            <span>Lee mis artículos en:</span>
            <a href="https://roastbrief.com.mx">
              <StaticImage src="../assets/images/roastbrief.png"
                alt="RoastBrief logo"
                placeholder="blurred"
                className="rb-img"
                style={{ width: "10rem", height: "100%" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>Política de Privacidad</p>
        <p>Copyright</p>
      </div>
    </footer>
  )
}

export default Footer