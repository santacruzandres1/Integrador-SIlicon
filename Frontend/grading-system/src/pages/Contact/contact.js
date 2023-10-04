import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import TablaPrueba from '../../components/Tablas/TablaPrueba';
import TablaUsuarios from '../../components/Tablas/TablaUsuarios';

const Contact = () => {
    return (
<>
<Header></Header>
<div className='container'>
<h1>Contacto</h1>
<hr></hr><br></br>

      <p>Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros:</p>
      <br></br>
      <ul>
        <li>Correo Electrónico: info@tuempresa.com</li>
        <li>Teléfono: +123 456 789</li>
      </ul>
</div>
<TablaPrueba></TablaPrueba>
/ TablaUsuarios TablaUsuarios corregir fetch de tabla usuarios 
<br></br><br></br><br></br><br></br><br></br>
<Footer></Footer>
</>  )
}

export default Contact;