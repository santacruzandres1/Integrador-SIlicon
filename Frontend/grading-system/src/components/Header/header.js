import React from "react"
import { NavLink } from "react-router-dom"
import './header.css'
import { Navbar, Nav } from 'react-bootstrap';



const Header = () => {

    return (

        <>

            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand > <h1 className="nav">Sistema de Calificaciones</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav >

                        <ul className="nav nav-underline ul ">
                            <li className="nav-item"><NavLink className="nav-link " to="/">Inicio</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link " to="/Administracion/dashboard">DASHBOARD</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link " to="/About">Sobre Nosotros</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link " to="/Contact">Contacto</NavLink></li>
                            

                            <li className="nav-item"><NavLink className="nav-link " to="/"><span class="material-symbols-outlined">
                                logout
                            </span></NavLink></li>




                        </ul>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>


            <div className='espacio'></div></>
    )

}

export default Header






