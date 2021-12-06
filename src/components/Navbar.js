import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby';
import './Navbar.css';
import { FaInstagram, FaLinkedinIn, FaBehance, FaSearch } from 'react-icons/fa';


function Navbar() {

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
            <Link to="/resources">
              Recursos
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className="search">
        <ul>
          <li>
            <a href="https://www.instagram.com/elar.mando">
              <FaInstagram className="navbar-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/elar.mando">
              <FaLinkedinIn className="navbar-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/elar.mando">
              <FaBehance className="navbar-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/elar.mando">
              <FaSearch size="1.8rem" className="navbar-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">
              Logo
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
            <Link to="/resources">
              Recursos
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contacto
            </Link>
          </li>

          <li className={`hamburger ${isActive ? 'active' : ''}`}
            onClick={hamburgerClicked}>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar