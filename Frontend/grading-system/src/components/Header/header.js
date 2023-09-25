import React from "react"
import { NavLink } from "react-router-dom"
import './header.css'

const Header = () => {

    return (

        <>
            <header className="container App-header fixed-top ">
                <h2>Sistema de Calificaciones</h2>
                <div className="container ">
                    <div className="d-flex justify-content-end ">




                        <ul className="nav nav-underline ">
                            <li className="nav-item"><NavLink className="nav-link " to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link " to="/About">About As</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link " to="/Contact">Contact</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link " to="/Administracion/dashboard">Administracion</NavLink></li>
                        </ul></div></div>


              
            </header>
            <div className='espacio'></div></>
    )

}

export default Header