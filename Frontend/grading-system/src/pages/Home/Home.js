import React from 'react';
import './Home.css';
import LoginRol from '../../components/LoginRol';
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import { Button } from 'react-bootstrap';
import { Typewriter, Cursor } from 'react-simple-typewriter'; 

const Home = () => {
  
    return (
        <>
    <Header className="header" />
            <div className="hero container-fluid justify-content-evenly" >
            <div className=' container justify-content-center text-align-items-center'>
            <h2>Bienvenido al Sistema de Gestión Académica</h2>
            <div className='text'>
                <Typewriter
                    options={{autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        "Una nueva experiencia en autogestión educativa donde padres, alumnos y docentes pueden acceder a la información del alumno en tiempo y forma."
                    ],
                    }}
                    />

            </div>
           
            </div>
            <Button className="btn-getStarted" href='#login'>Get Started!</Button>
            </div>
            <section className="container-fluid" id="login">
            <LoginRol />
            </section>
        <Footer/>
</>
            
    )
}

export default Home;