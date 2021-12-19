import React, { useState, useEffect } from 'react'
import { Link, navigate } from 'gatsby';
import './Navbar.css';
import { FaInstagram, FaLinkedinIn, FaBehance, FaSearch } from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll';
import DaniLogo from '/src/assets/svg/Logo.svg';

function Navbar({ toggleSearch }) {

  const [isActive, setIsActive] = useState(false);
  const [hide, setHide] = useState('');


  let lastScrollTop = 0;

  function controlNavbar() {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      setHide('hidden');
      setIsActive(false);
    } else {
      setHide('');
    }
    lastScrollTop = scrollTop;
  }

  useEffect(() => {
    window.addEventListener('scroll',
      controlNavbar)
    return () => {
      window.removeEventListener('scroll',
        controlNavbar);
    }
  }, [])

  function hamburgerClicked() {
    setIsActive(!isActive);
  }

  return (

    <nav className={`navbar ${hide}`}>
      <div className={`hiddenOnMobile ${isActive ? 'active' : ''}`}
        onClick={hamburgerClicked}>
        <ul>
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
      </div>
      <div className="search">
        <ul>
          <li>
            <a href="https://www.instagram.com/danivhc" target="__blank">
              <FaInstagram className="navbar-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/daniela-herrera-b21a6a58" target="__blank">
              <FaLinkedinIn className="navbar-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/danihc9" target="__blank">
              <FaBehance className="navbar-icon" />
            </a>
          </li>
          <li>
            <button onClick={toggleSearch}>
              <FaSearch size="1.8rem" className="navbar-icon" />
            </button>
          </li>
        </ul>
      </div>
      <div className="nav">
        <ul>
          <li>
            <button onClick={() => {
              if (document.querySelector('.hero') != null) {
                scrollTo(".hero");
              } else {
                navigate("/");
              }
            }}>
              <DaniLogo className="dani-logo" />
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

          <li>
            <button onClick={toggleSearch} className="search-button">
              <FaSearch size="2rem" className="navbar-icon" />
            </button>
          </li>

          <li>
            <button className={`hamburger ${isActive ? 'active' : ''}`}
              onClick={hamburgerClicked}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar