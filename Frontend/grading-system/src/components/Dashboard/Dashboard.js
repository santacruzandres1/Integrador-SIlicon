import React from 'react';
import './Dashboard.css';

import DashboardAlumno from '../DashboardAlumno/DashboardAlumno';
import DashProfesor from '../DashProfesor/DashProfesor';

import { NavLink } from 'react-router-dom';
import Header from '../Header/header';

let datos = [
  { id_usuario: 1, nombre: "lucas", apellido: "pradier", mail: "aasdas", rol: "alumno", dni: 33123 },
  { id_usuario: 2, nombre: "andres", apellido: "santa", mail: "aasdas", rol: "docente", dni: 5234251 },
  { id_usuario: 3, nombre: "matiuas", apellido: "safaf", mail: "fghfd", rol: "admin", dni: 41214 }
]

let materias = [
  { id_materia: 1, nombre: "lengua", profesor: "carlos", curso: "primero" }
]
let cursos = [
  { id_curso: 1, nombre: "primero" }
]

const DashboardUser = () => {
  return (
    <> 

    <Header></Header>
    <div>
      <h1>DASHBOARD ADMINISTRACIÓN </h1>

    </div>

<br></br>
<hr></hr>
<br></br>
<div  class="container ">
  <h3>Seleccione que desea administrar</h3><br></br><br></br>
  <div class="row justify-content-center align-items-center g-2">
    <div class="col"><button type="button" class="btn btn-dark">Usuarios</button>
    </div>
    <div class="col"><button type="button" class="btn btn-dark">Materias</button></div>
    <div class="col"><button type="button" class="btn btn-dark">Cursos</button></div>
  </div>
</div>
<br></br>
<hr></hr>
<br></br><br></br>
    <br></br>
    <div className='titulo'>
      <h2> ADMINISTRACION USUARIOS </h2>

    </div>
      <br></br>
      <div className="container ">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-2 ">  <NavLink className="btn btn-dark" to="/crearUsuario" >Agregar Usuario</NavLink></div>
          <div class="col-4 offset-4"><div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar Usuario" aria-label="Search"></input>
              <button className="btn btn-dark" type="submit">Buscar</button>
            </form>
          </div></div>

        </div>




      </div>
      <br></br> <br></br>


      <div className="container item">
        <div className='container'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Mail</th>
                <th scope="col">Rol</th>
                <th scope="col">DNI</th>

              </tr>
            </thead>
            {datos.map(datos => (
              <tbody>
                <tr >
                  <th scope="row">{datos.id_usuario}</th>
                  <td>{datos.nombre}</td>
                  <td>{datos.apellido}</td>
                  <td>{datos.mail}</td>
                  <td>{datos.rol}</td>
                  <td>{datos.dni}</td>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-dark">Editar</button>

                    <button type="button" class="btn btn-dark">Borrar</button>
                  </div>
                </tr>

              </tbody>))}
          </table>
        </div>
        <br></br>






      </div>

      <div>
        <hr></hr><br></br>
        <h2>ADMINISTRACIÓN MATERIAS </h2>

      </div>
      <br></br>
      <div className="container ">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-2">  <button className="btn btn-dark  ">Agregar Materia</button></div>
          <div class="col-4 offset-4"><div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar Materia" aria-label="Search"></input>
              <button className="btn btn-dark" type="submit">Buscar</button>
            </form>
          </div></div>

        </div>




      </div>
      <br></br> <br></br>


      <div className="container item">

        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Profesor</th>
              <th scope="col">Curso</th>


            </tr>
          </thead>
          {materias.map(mate => (
            <tbody>
              <tr >
                <th scope="row">{mate.id_materia}</th>
                <td>{mate.nombre}</td>
                <td>{mate.profesor}</td>
                <td>{mate.curso}</td>

                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-dark">Editar</button>

                  <button type="button" class="btn btn-dark">Borrar</button>
                </div>
              </tr>

            </tbody>))}
        </table>


      </div>

      <div>
        <hr></hr><br></br>
        <h2>ADMINISTRACIÓN CURSOS </h2>

      </div>
      <br></br>
      <div className="container ">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-2">  <button className="btn btn-dark  ">Agregar Curso</button></div>
          <div class="col-4 offset-4"><div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar Curso" aria-label="Search"></input>
              <button className="btn btn-dark" type="submit">Buscar</button>
            </form>
          </div></div>

        </div>




      </div>
      <br></br> <br></br>


      <div className="container item">

        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>



            </tr>
          </thead>
          {cursos.map(mate => (
            <tbody>
              <tr >
                <th scope="row">{mate.id_curso}</th>
                <td>{mate.nombre}</td>


                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-dark">Editar</button>

                  <button type="button" class="btn btn-dark">Borrar</button>
                </div>
              </tr>

            </tbody>))}
        </table>


      </div>


      <DashboardAlumno></DashboardAlumno>
      <DashProfesor></DashProfesor>






    </>
  );
}





export default DashboardUser;
