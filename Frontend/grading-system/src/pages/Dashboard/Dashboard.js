import React from 'react';
import Welcome from '../Welcome/Welcome';
import "./Dashboard.css"


let datos = [
  { id_usuario: 1, nombre: "lucas", apellido: "pradier", mail: "aasdas", rol: "alumno", dni: 33123 },
  { id_usuario: 2, nombre: "andres", apellido: "santa", mail: "aasdas", rol: "docente", dni: 5234251 },
  { id_usuario: 3, nombre: "matiuas", apellido: "safaf", mail: "fghfd", rol: "admin", dni: 41214 }
]
const Dashboard = () => {
  return (
    <> <div>
      <h2>DASHBOARD</h2>
      <Welcome />
    </div>
      <br></br>
      <div className="container ">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-2">  <button className="btn btn-dark  ">Agregar Usuario</button></div>
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

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
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
        {/* <div class="row  ">




            <div class="col-10">

              <ol className="list-group ">

                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold"></div>

                    <li class="list-group ">Nombre: {datos.nombre} </li>
                    <li class="list-group">Apellido: {datos.apellido} </li>
                    <li class="list-group ">Mail: {datos.mail}</li>
                    <li class="list-group ">Rol: {datos.rol}</li>
                    <li class="list-group">DNI: {datos.dni}</li>


                  </div>


                </li>
              </ol>
            </div>
            <div class="col-2 align-items-center ">
              <br></br><br></br>
              <button className="badge bg-primary rounded-pill bot  ">editar</button><br></br><br></br>
              <button className="badge bg-primary rounded-pill ">borrar</button></div>

          </div> */}


      </div>








    </>
  );
}



export default Dashboard;