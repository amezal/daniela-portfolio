import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="search">
                <ul>
                    <li>Redes</li>
                    <li>Buscar</li>
                </ul>
            </div>
            <div className="nav">
                <ul>
                    <li>LOGO</li>
                    <li>Servicios</li>
                    <li>Sobre mi</li>
                    <li>Blog</li>
                    <li>Recursos</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar