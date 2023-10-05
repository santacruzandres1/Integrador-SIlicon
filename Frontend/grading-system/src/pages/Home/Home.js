import React from 'react';
import './Home.css';
import LoginRol from '../../components/LoginRol';
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';

const Home = () => {
    return (
<>
       <Header></Header>
        <div>
            <h2>Bienvenido al Sistema de Gestión Académica</h2>
            <hr></hr><br></br>
            <p>Una nueva experiencia en autogestión educativa, donde padres, alumnos y docentes pueden acceder a la información del alumno en tiempo y forma.</p>
            <br></br>
            <LoginRol />
        </div>
        <br></br><br></br>
        <Footer></Footer></>
    )
}

export default Home;