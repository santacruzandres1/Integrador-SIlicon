import React from 'react';
import './Dashboard.css';
import DashboardAlumno from '../DashboardAlumno/DashboardAlumno';
import DashProfesor from '../DashProfesor/DashProfesor';
import Header from '../Header/header';

import TablaUsuarios from '../Tablas/TablaUsuarios';
import Footer from '../footer/footer';
import TablaMaterias from '../Tablas/TablaMaterias';
import TablaCursos from '../Tablas/TablaCursos';


const DashboardUser = () => {

  return (
    <>
      <Header></Header>
      <div class="container ">
        <h3>Seleccione que desea administrar</h3>
        <div class="row justify-content-center align-items-center g-2">
          <div class="col">
            <a href="#usuarios" class="btn btn-dark">Usuarios</a>
          </div>
          <div class="col">
            <a href='#materias' class="btn btn-dark">Materias</a></div>
          <div class="col"><a href='#cursos' type="button" class="btn btn-dark">Cursos</a></div>
        </div>
      </div>
      <div className='titulo'>
      </div>

      <div className="container ">
        
      {/* FETCH FORMULARIO DE USUARIOS */}
  
      <div className="container" id="usuarios">
      <TablaUsuarios/>
      </div>
     <div className='container'  id="materias">
     <TablaMaterias/>
     </div>
      <div className='container' id="cursos">
      <TablaCursos/>
      </div>
      </div>
      


      <DashboardAlumno></DashboardAlumno>
      <DashProfesor></DashProfesor>



      <Footer></Footer>



    </>
  );
}





export default DashboardUser;
