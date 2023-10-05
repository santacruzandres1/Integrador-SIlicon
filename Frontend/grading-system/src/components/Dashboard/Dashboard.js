import React from 'react';
import './Dashboard.css';
import { Button, Modal } from 'react-bootstrap';
import DashboardAlumno from '../DashboardAlumno/DashboardAlumno';
import DashProfesor from '../DashProfesor/DashProfesor';
import { useState  } from 'react';
import Header from '../Header/header';
import FormEditarUsuario from '../formEditar/formEditarUser';
//import FormCrearUsuario from '../formCrear/formCrearUsuario';
import FormCrearMateria from '../formCrear/formCrearMateria';
import FormEditMateria from '../formEditar/formEditMateria';
import FormEditCurso from '../formEditar/formEditCurso';
import FormCrearCurso from '../formCrear/formCrearCurso';
import TablaUsuarios from '../Tablas/TablaUsuarios';

import Footer from '../footer/footer';

let datos = [
  { id_usuario: 1, nombre: "Lucas", apellido: "Pradier", mail: "lucaspradier@gmail.com", rol: "alumno", dni: 33123 },
  { id_usuario: 2, nombre: "Andres", apellido: "SantaCruz", mail: "santacruzandres@gmail.com", rol: "docente", dni: 5234251 },
  { id_usuario: 3, nombre: "Matias", apellido: "Benegas", mail: "matiasbenegas@gmail.com", rol: "admin", dni: 41214 }
]

let materias = [
  { id_materia: 1, nombre: "lengua", profesor: "carlos", curso: "primero" }
]
let cursos = [
  { id_curso: 1, nombre: "primero" }
]

const DashboardUser = () => {
//Modal Crear Usuario
  // const [showModalCrear, setShowModalCrear] = useState(false);
  // const handleCloseCrear = () => setShowModalCrear(false);
  // const handleShowCrear = () => setShowModalCrear(true);

  //Modal Editar Usuario
  const [showModalEdit, setShowModalEdit] = useState(false);
  const handleCloseEdit = () => setShowModalEdit(false);
  const handleShowEdit = () => setShowModalEdit(true);

  //Modal Crear Materia
  const [showModalCrearMateria, setShowModalCrearMateria] = useState(false);
  const handleCloseCrearMateria = () => setShowModalCrearMateria(false);
  const handleShowCrearMateria = () => setShowModalCrearMateria(true);

  //Modal Editar Materia
  const [showModalEditMateria, setShowModalEditMateria] = useState(false);
  const handleCloseEditMateria = () => setShowModalEditMateria(false);
  const handleShowEditMateria = () => setShowModalEditMateria(true);

  const [showModalCrearCurso, setShowModalCrearCurso] = useState(false);
  const handleCloseCrearCurso = () => setShowModalCrearCurso(false);
  const handleShowCrearCurso = () => setShowModalCrearCurso(true);

  const [showModalEditCurso, setShowModalEditCurso] = useState(false);
  const handleCloseEditCurso = () => setShowModalEditCurso(false);
  const handleShowEditCurso = () => setShowModalEditCurso(true);

  const [showModalDelUser, setShowModalDelUser] = useState(false);
  const handleCloseDelUser = () => setShowModalDelUser(false);
  const handleShowDelUser = () => setShowModalDelUser(true);

  const [showModalDelMateria, setShowModalDelMateria] = useState(false);
  const handleCloseDelMateria = () => setShowModalDelMateria(false);
  const handleShowDelMateria = () => setShowModalDelMateria(true);

  const [showModalDelCurso, setShowModalDelCurso] = useState(false);
  const handleCloseDelCurso = () => setShowModalDelCurso(false);
  const handleShowDelCurso = () => setShowModalDelCurso(true);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = datos.filter((item) => {
    const apellido = item.apellido;
        const searchTermLowerCase = searchTerm.toLowerCase();
    const apellidoLowerCase = apellido.toLowerCase();
    const regex = new RegExp(`^${searchTermLowerCase}[a-z]*$`);
    return regex.test(apellidoLowerCase);
  });


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
            <a href="#usuario" class="btn btn-dark">Usuarios</a>
          </div>
          <div class="col">
            <a href='#materia' class="btn btn-dark">Materias</a></div>
          <div class="col"><a href='#curso' type="button" class="btn btn-dark">Cursos</a></div>
        </div>
        <div id='usuario'></div>
      </div>
      <br></br>
      <hr ></hr>
      <br></br><br></br>
      <br></br>
      <div className='titulo'>
        <h2> ADMINISTRACION USUARIOS </h2>

      </div>
      <br></br>
      <div className="container ">
        
      {/* FETCH FORMULARIO DE USUARIOS */}
      <TablaUsuarios></TablaUsuarios>


        {/* <Modal show={showModalCrear} onHide={handleCloseCrear}> */}
          
            <br></br>
            {/* <Modal.Body> */}

            {/* <FormCrearUsuario></FormCrearUsuario> */}

          {/* </Modal.Body> */}
            {/* <Modal.Footer> */}

              {/* <Button variant="secondary"> */}
                {/* Cerrar */}
              {/* </Button> */}
            {/* </Modal.Footer> */}
            
            

        {/* </Modal> */}
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

        <Modal show={showModalDelUser} onHide={handleCloseDelUser}>

          <Modal.Body >

            <div className='container  text-center '>
              <br></br>
              <strong>¿Está seguro que desea eliminar este usuario?</strong><br></br><br></br>
              <div className='row  '>
                <div className='col'> <button className="btn btn-danger">Eliminar</button></div>
                <div className='col offset-1'> <Button className="btn btn-dark" variant="secondary" onClick={handleCloseDelUser}>
                  Cancelar
                </Button></div>
              </div>




            </div>

          </Modal.Body>

        </Modal>

      </div>
      <br></br> <br></br>


      <div className="container item">
        <div className='container'>
          <table class="table table-striped-columns">
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
            <div id='materia'></div>
            

            {filteredData.map(datos => (


              <tbody id= 'data'>
                <tr >
                  <th scope="row">{datos.id_usuario}</th>
                  <td>{datos.nombre}</td>
                  <td>{datos.apellido}</td>
                  <td>{datos.mail}</td>
                  <td>{datos.rol}</td>
                  <td>{datos.dni}</td>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button onClick={handleShowEdit} type="button" class="btn btn-dark">Editar</button>

                    <button onClick={handleShowDelUser} type="button" class="btn btn-dark">Borrar</button>
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


        <div class="row justify-content-start">
          <div className="col-4 ">
            <button onClick={handleShowCrearMateria} className="btn btn-dark  ">Agregar Materia</button>
          </div>
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
        <Modal show={showModalDelMateria} onHide={handleCloseDelMateria}>

          <Modal.Body >

            <div className='container  text-center '>
              <br></br>
              <strong>¿Está seguro que desea eliminar esta materia?</strong><br></br><br></br>
              <div className='row  '>
                <div className='col'> <button className="btn btn-danger">Eliminar</button></div>
                <div className='col offset-1'> <Button className="btn btn-dark" variant="secondary" onClick={handleCloseDelMateria}>
                  Cancelar
                </Button></div>
              </div>




            </div>

          </Modal.Body>
        </Modal>

      </div>
      <br></br> <br></br>


      <div className="container item">
        <div id='curso'></div>
        <table class="table table-striped-columns">
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

                  <button onClick={handleShowDelMateria} type="button" class="btn btn-dark">Borrar</button>
                </div>
              </tr>

            </tbody>))}
        </table>


      </div>

      <div>
        <hr></hr><br></br>
        <h2 >ADMINISTRACIÓN CURSOS </h2>

      </div>
      <br></br>
      <div className="container ">
        <div class="row justify-content-start">
          <div className="col-4 ">
            <button onClick={handleShowCrearCurso} className="btn btn-dark  ">Agregar Curso</button></div>


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

        <Modal show={showModalDelCurso} onHide={handleCloseDelCurso}>

          <Modal.Body >

            <div className='container  text-center '>
              <br></br>
              <strong>¿Está seguro que desea eliminar este curso?</strong><br></br><br></br>
              <div className='row  '>
                <div className='col'> <button className="btn btn-danger">Eliminar</button></div>
                <div className='col offset-1'> <Button className="btn btn-dark" variant="secondary" onClick={handleCloseDelCurso}>
                  Cancelar
                </Button></div>
              </div>




            </div>

          </Modal.Body>
        </Modal>
      </div>
      <br></br> <br></br>


      <div className="container  ">

        <table class="table table-striped-columns">
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

                  <button onClick={handleShowDelCurso} type="button" class="btn btn-dark">Borrar</button>
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
