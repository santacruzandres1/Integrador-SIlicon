import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import FormEditarNota from '../formEditar/formEditarNota';
import { useFetch } from '../../useFetch';
import jwtDecode from 'jwt-decode';
import TablaAlumnos from './TablaAlumnos';



const DashProfesor = () => {
  const token = sessionStorage.getItem('token');

  const decodedToken = jwtDecode(token);


  const id_user = decodedToken.id_usuario;
    
const { data: nota } = useFetch(`http://localhost:8080/api/nota/${id_user}`);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermApellido, setSearchTermApellido] = useState('');
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleApellidoSearch = (e) => {
    setSearchTermApellido(e.target.value);
  };
  const filteredData = nota.filter((item) => {
    const materia = item.materia;
    const apellido = item.apellido;
    const searchTermMateriaLowerCase = searchTerm.toLowerCase();
    const searchTermApellidoLowerCase = searchTermApellido.toLowerCase();
    const notaMateriaLowerCase = materia.toLowerCase();
    const notaApellidoLowerCase = apellido.toLowerCase();

  const materiaMatches = notaMateriaLowerCase.includes(searchTermMateriaLowerCase);
    const apellidoMatches = notaApellidoLowerCase.includes(searchTermApellidoLowerCase);
  
    return materiaMatches && apellidoMatches;
  });
      
    //Modal Editar nota
    const [notaAEditar, setnotaAEditar] = useState(""); // Nuevo estado
    const [showModalEdit, setShowModalEdit] = useState(false);
  
    const handleShowEdit = (id_usuario,id_materia) => {
      const notaParaEditar = nota.find((nota) => nota.id_usuario === id_usuario && nota.id_materia === id_materia);

      if (notaParaEditar) {
        setnotaAEditar(notaParaEditar);
        setShowModalEdit(true);
      }
    };

    const handleClose = () => {
      setShowModalEdit(false);
    };
   

    const promedioColumna = filteredData.map(datos => {
      // Filtrar las notas no nulas ni 0
      const notasValidas = [datos.periodo_1, datos.periodo_2, datos.periodo_3].filter(nota => nota !== 0 && nota !== null);
  
      // Calcular el promedio solo con las notas válidas
      const promedio = (notasValidas.reduce((total, nota) => total + nota, 0) / notasValidas.length).toFixed(2);
  
      return {
        id_materia:datos.id_materia,
        id_usuario:datos.id_usuario,
        apellido:datos.apellido,
        nombre:datos.nombre,
        materia: datos.materia,
          nota1: datos.periodo_1,
          nota2: datos.periodo_2,
          nota3: datos.periodo_3,
          promedio: promedio
      };
  });


    return (

      <>

            <div>
          <h2>DASHBOARD PROFESOR </h2>

                <div>
                <TablaAlumnos />
            </div>
        </div>
            <div className="container ">
                <div class="row ">

                    <div class="col-4 "><div className="container-fluid">
                        <form className="d-flex" role="search">

                            <input className="form-control me-2"
                                type="text"
                                placeholder="Buscar por Apellido del alumno"

                                onChange={handleSearch}
                                value={searchTerm}
                            />
                            <span className="btn btn-dark" >Buscar</span>
                        </form>
                    </div></div>

                    <div class="col-4 "><div className="container-fluid">
                        <form className="d-flex" role="search">

                            <input className="form-control me-2"
                                type="text"
                                placeholder="Buscar por Apellido del alumno"

                                onChange={handleApellidoSearch}
                                value={searchTermApellido}
                            />
                            <span className="btn btn-dark" >Buscar</span>
                        </form>
                    </div></div>

                </div>

          <Modal show={showModalEdit} onHide={handleClose}>
                <Modal.Header closeButton>
              <Modal.Title> 'Editar Nota' </Modal.Title>
                </Modal.Header>
                <Modal.Body>
              <FormEditarNota data={notaAEditar} handleClose={handleClose} /> 
                </Modal.Body>
            </Modal>


            </div>
            <br></br> <br></br>


            <div className="container item">

                <table class="table table-striped-columns">
                    <thead>
                        <tr>
                            <th scope="col">id materia</th>
                            <th scope="col">id usuario</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Materia</th>
                            <th scope="col">Periodo 1</th>
                            <th scope="col">Periodo 2</th>
                            <th scope="col">Periodo 3</th>
                            <th scope="col">Promedio</th>

                        </tr>
                    </thead>
                    {promedioColumna.map(nota => (
                        <tbody>
                            <tr >
                              <td>{nota.id_materia}</td>
                              <td>{nota.id_usuario}</td>
                                <td>{nota.nombre}</td>
                                <td>{nota.apellido}</td>
                                <td>{nota.materia}</td>
                                <td>{nota.nota1}</td>
                                <td>{nota.nota2}</td>
                                <td>{nota.nota3}</td>
                                <td>{nota.promedio}</td>
                                <div class="btn-group" role="group" aria-label="Basic example">
                            <button onClick={() => handleShowEdit(nota.id_usuario, nota.id_materia)} type="button" class="btn btn-dark">Editar</button>
                                </div>
                            </tr>

                        </tbody>))}
          </table>
            </div>
        </>
    );
}



export default DashProfesor;
