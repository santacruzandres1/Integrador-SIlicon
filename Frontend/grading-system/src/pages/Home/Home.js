import React from 'react';
import './Home.css';
import LoginRol from '../../components/LoginRol';

const Home = () => {
    return (
        <div>
            <h2>Bienvenido al Sistema de Gestión Académica</h2>
            <p>Una nueva experiencia en autogestión educativa, donde padres, alumnos y docentes pueden acceder a la información del alumno en tiempo</p>
            <LoginRol />
        </div>
    )
}

export default Home;