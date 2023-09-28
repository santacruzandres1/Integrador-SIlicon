import React from 'react';
import './Dashboard.css';
import { Button, Modal } from 'react-bootstrap';
import DashboardAlumno from '../DashboardAlumno/DashboardAlumno';
import DashProfesor from '../DashProfesor/DashProfesor';
import { useState } from 'react';
import Header from '../Header/header';
import FormEditarUsuario from '../formEditar/formEditarUser';
import FormCrearUsuario from '../formCrear/formCrearUsuario';
import FormCrearMateria from '../formCrear/formCrearMateria';
import FormEditMateria from '../formEditar/formEditMateria';
import FormEditCurso from '../formEditar/formEditCurso';
import FormCrearCurso from '../formCrear/formCrearCurso';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

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

  const [showModalCrear, setShowModalCrear] = useState(false);
  const handleCloseCrear = () => setShowModalCrear(false);
  const handleShowCrear = () => setShowModalCrear(true);

  const [showModalEdit, setShowModalEdit] = useState(false);
  const handleCloseEdit = () => setShowModalEdit(false);
  const handleShowEdit = () => setShowModalEdit(true);

  const [showModalCrearMateria, setShowModalCrearMateria] = useState(false);
  const handleCloseCrearMateria = () => setShowModalCrearMateria(false);
  const handleShowCrearMateria = () => setShowModalCrearMateria(true);

  const [showModalEditMateria, setShowModalEditMateria] = useState(false);
  const handleCloseEditMateria = () => setShowModalEditMateria(false);
  const handleShowEditMateria = () => setShowModalEditMateria(true);

  const [showModalCrearCurso, setShowModalCrearCurso] = useState(false);
  const handleCloseCrearCurso = () => setShowModalCrearCurso(false);
  const handleShowCrearCurso = () => setShowModalCrearCurso(true);

  const [showModalEditCurso, setShowModalEditCurso] = useState(false);
  const handleCloseEditCurso = () => setShowModalEditCurso(false);
  const handleShowEditCurso = () => setShowModalEditCurso(true);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = datos.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <Header></Header>
      <div>
        <h1>DASHBOARD ADMINISTRACIÓN </h1>

      </div>

      <br></br>
      <hr></hr>
      <br></br>
      <div class="container ">
        <h3>Seleccione que desea administrar</h3><br></br><br></br>
        <div class="row justify-content-center align-items-center g-2">
          <div class="col">
            <Link to='#usuario' class="btn btn-dark">Usuarios</Link>
          </div>
          <div class="col">
            <Link to="#materia" class="btn btn-dark">Materias</Link></div>
          <div Link to="#curso" class="col"><button type="button" class="btn btn-dark">Cursos</button></div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <br></br><br></br>
      <br></br>
      <div id='usuario' className='titulo'>
        <h2> ADMINISTRACION USUARIOS </h2>

      </div>
      <br></br>
      <div className="container ">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-2 ">  <button onClick={handleShowCrear} className="btn btn-dark"  >Agregar Usuario</button></div>
          <div class="col-4 offset-4">



            <div class="input-group mb-3">
          
              <input className="form-control "
                type="text"
                placeholder="Buscar por nombre"
                onChange={handleSearch}
                value={searchTerm}
              />
  <span className="btn btn-dark">Buscar</span>






            </div></div>

        </div>

        <Modal show={showModalCrear} onHide={handleCloseCrear}>

          <Modal.Body>

            <FormCrearUsuario></FormCrearUsuario>

          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={handleCloseCrear}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showModalEdit} onHide={handleCloseEdit}>

          <Modal.Body>

            <FormEditarUsuario></FormEditarUsuario>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Cerrar
            </Button>

          </Modal.Footer>
        </Modal>

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
            {filteredData.map(datos => (
              <tbody>
                <tr >
                  <th scope="row">{datos.id_usuario}</th>
                  <td>{datos.nombre}</td>
                  <td>{datos.apellido}</td>
                  <td>{datos.mail}</td>
                  <td>{datos.rol}</td>
                  <td>{datos.dni}</td>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button onClick={handleShowEdit} type="button" class="btn btn-dark">Editar</button>

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
        <h2 id='materia'>ADMINISTRACIÓN MATERIAS </h2>

      </div>
      <br></br>
      <div className="container ">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-2">  <button onClick={handleShowCrearMateria} className="btn btn-dark  ">Agregar Materia</button></div>
          <div class="col-4 offset-4"><div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar Materia" aria-label="Search"></input>
              <span className="btn btn-dark">Buscar</span>
            </form>
          </div></div>

        </div>


        <Modal show={showModalCrearMateria} onHide={handleCloseCrearMateria}>

          <Modal.Body>

            <FormCrearMateria></FormCrearMateria>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={handleCloseCrearMateria}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showModalEditMateria} onHide={handleCloseEditMateria}>

          <Modal.Body>

            <FormEditMateria></FormEditMateria>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditMateria}>
              Cerrar
            </Button>

          </Modal.Footer>
        </Modal>


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
                  <button onClick={handleShowEditMateria} type="button" class="btn btn-dark">Editar</button>

                  <button type="button" class="btn btn-dark">Borrar</button>
                </div>
              </tr>

            </tbody>))}
        </table>


      </div>

      <div>
        <hr></hr><br></br>
        <h2 id='curso'>ADMINISTRACIÓN CURSOS </h2>

      </div>
      <br></br>
      <div className="container ">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-2">  <button onClick={handleShowCrearCurso} className="btn btn-dark  ">Agregar Curso</button></div>
          <div class="col-4 offset-4"><div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar Curso" aria-label="Search"></input>
              <button className="btn btn-dark" type="submit">Buscar</button>
            </form>
          </div></div>

        </div>


        <Modal show={showModalCrearCurso} onHide={handleCloseCrearCurso}>

          <Modal.Body>

            <FormCrearCurso></FormCrearCurso>

          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={handleCloseCrearCurso}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showModalEditCurso} onHide={handleCloseEditCurso}>

          <Modal.Body>

            <FormEditCurso></FormEditCurso>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditCurso}>
              Cerrar
            </Button>

          </Modal.Footer>
        </Modal>


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
                  <button onClick={handleShowEditCurso} type="button" class="btn btn-dark">Editar</button>

                  <button type="button" class="btn btn-dark">Borrar</button>
                </div>
              </tr>

            </tbody>))}
        </table>


      </div>


      <DashboardAlumno></DashboardAlumno>
      <DashProfesor></DashProfesor>



            <Footer></Footer>



    </>
  );
}





export default DashboardUser;
