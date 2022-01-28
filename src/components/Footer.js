import React from 'react'
import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import DaniLogo from '/src/assets/svg/Logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div>
          <button onClick={() => {
            if (document.querySelector('.hero') != null) {
              scrollTo(".hero");
            } else {
              navigate("/");
            }
          }}>
            <DaniLogo className="footer-logo" />
          </button>
          <p>Especialista en estrategias de marca, copywriting y diseño.</p>
          <ul className="footer-socials">
            <li>
              <a href="https://www.instagram.com/danivhc" target="__blank">
                <FaInstagram className="footer-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/daniela-herrera-b21a6a58" target="__blank">
                <FaLinkedinIn className="footer-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/danihc9" target="__blank">
                <FaBehance className="footer-icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="right-footer">
          <ul className="footer-pages">
            <li>
              <button onClick={() => {
                if (document.querySelector('.hero') != null) {
                  scrollTo(".hero");
                } else {
                  navigate("/");
                }
              }}>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => {
                if (document.querySelector('#services') != null) {
                  scrollTo("#services");
                } else {
                  navigate("/#services");
                }
              }}>
                Servicios
              </button>
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
            <li>
              <button onClick={() => {
                if (document.querySelector('#contact') != null) {
                  scrollTo("#contact");
                } else {
                  navigate("/#contact");
                }
              }}>
                Contacto
              </button>
            </li>
          </ul>
          <div className="roastbrief">
            <span>Lee mis artículos en:</span>
            <a href="https://roastbrief.com.mx/?s=daniela+herrera">
              <StaticImage src="../assets/images/roastbrief.png"
                alt="RoastBrief logo"
                placeholder="blurred"
                className="rb-img"
                style={{ width: "10rem", height: "100%" }} />
              {/* <RBLogo className="rb-img"/> */}
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