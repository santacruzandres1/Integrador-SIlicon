import React from 'react';
import './Dashboard.css';
import { Button, Modal } from 'react-bootstrap';
import DashboardAlumno from '../DashboardAlumno/DashboardAlumno';
import DashProfesor from '../DashProfesor/DashProfesor';
import { useState  } from 'react';
import Header from '../Header/header';
import FormEditCurso from '../formEditar/formEditCurso';
import FormCrearCurso from '../formCrear/formCrearCurso';
import TablaUsuarios from '../Tablas/TablaUsuarios';
import Footer from '../footer/footer';
import TablaMaterias from '../Tablas/TablaMaterias';


let cursos = [
  { id_curso: 1, nombre: "primero" }
]

const DashboardUser = () => {


  const [showModalCrearCurso, setShowModalCrearCurso] = useState(false);
  const handleCloseCrearCurso = () => setShowModalCrearCurso(false);
  const handleShowCrearCurso = () => setShowModalCrearCurso(true);

  const [showModalEditCurso, setShowModalEditCurso] = useState(false);
  const handleCloseEditCurso = () => setShowModalEditCurso(false);
  const handleShowEditCurso = () => setShowModalEditCurso(true);


  const [showModalDelCurso, setShowModalDelCurso] = useState(false);
  const handleCloseDelCurso = () => setShowModalDelCurso(false);
  const handleShowDelCurso = () => setShowModalDelCurso(true);



  return (
    <>
      <Header></Header>
      <div class="container ">
        <h3>Seleccione que desea administrar</h3>
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
      <div className='titulo'>
      </div>

      <div className="container ">
        
      {/* FETCH FORMULARIO DE USUARIOS */}
  
      <div className="container">
      <TablaUsuarios/>
      </div>
     <div className='container'>
     <TablaMaterias/>
     </div>
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
