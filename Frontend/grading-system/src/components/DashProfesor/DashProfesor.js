import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormCrearNota from '../formCrear/formCrearNota';
import FormEditarNota from '../formEditar/formEditarNota';
import { useFetch } from '../../useFetch';




const DashProfesor = () => {

    
const { data: nota } = useFetch("http://localhost:8080/api/nota");

  const [Eliminar, setEliminar] = useState([]);

  const [showModalDel, setShowModalDel] = useState(false);
  const handleCloseDel = () => setShowModalDel(false);
  const handleShowDel = (id_usuario,id_materia) => {
    setEliminar([id_materia,id_usuario]);

    setShowModalDel(true);

  };

  const handleSubmit = () => {
    
    fetch(`http://localhost:8080/api/nota/${Eliminar[0]}/${Eliminar[1]}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': sessionStorage.getItem('token')
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Elemento eliminado con éxito');
          setShowModalDel(false);
          window.location.reload();
        
        } else {
          console.error('Error al eliminar el usuario');
        }
      })
      .catch((error) => {
        console.error('Error de red:', error);
      });
  }
 
  const [searchTerm, setSearchTermMateria] = useState('');
  const [searchTermApellido, setSearchTermApellido] = useState('');
  
  const handleSearch = (e) => {
    setSearchTermMateria(e.target.value);
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
      
  
  
    //Modal Crear nota
    const [showModalCreate, setShowModalCreate] = useState(false);
    const handleShowCreate = () => setShowModalCreate(true);
  
    //Modal Editar nota
    const [notaAEditar, setnotaAEditar] = useState([]); // Nuevo estado
    const [showModalEdit, setShowModalEdit] = useState(false);
  
    const handleShowEdit = (id_usuario,id_materia) => {
      const notaParaEditar = nota.find((nota) => [nota.id_usuario = id_usuario, nota.id_materia=id_materia])
      if (notaParaEditar) {
        setnotaAEditar(notaParaEditar);
        setShowModalEdit(true);
      }
    };

    const handleClose = () => {
      setShowModalCreate(false);
      setShowModalEdit(false);
    };
   

    const promedioColumna = filteredData.map(datos => {
      // Filtrar las notas no nulas ni 0
      const notasValidas = [datos.periodo_1, datos.periodo_2, datos.periodo_3].filter(nota => nota !== 0 && nota !== null);
  
      // Calcular el promedio solo con las notas válidas
      const promedio = (notasValidas.reduce((total, nota) => total + nota, 0) / notasValidas.length).toFixed(2);
  
      return {
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
            <hr></hr>

            <div>
                <h2>DASHBOARD PROFESOR </h2>
                <br></br>
            </div>
            <br></br>
            <div className="container ">
                <div class="row ">
                    <div class="col-4">
                        <button onClick={handleShowCreate} className="btn btn-dark  ">Agregar Nota</button>
                    </div>

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

                <Modal show={showModalEdit || showModalCreate} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{showModalEdit ? 'Editar Nota' : 'Crear Nota' }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {showModalEdit ? <FormEditarNota data={notaAEditar} handleClose={handleClose} /> : <FormCrearNota handleClose={handleClose} />}
                </Modal.Body>
            </Modal>
            

<Modal show={showModalDel} onHide={handleCloseDel}>

<Modal.Body >

  <div className='container  text-center '>
    <br></br>
    <strong>¿Está seguro que desea eliminar esta nota?</strong><br></br><br></br>
    <div className='row  '>
      <div className='col'> <button onClick={handleSubmit} className="btn btn-danger">Eliminar</button></div>
      <div className='col offset-1'> <Button className="btn btn-dark" variant="secondary" onClick={handleCloseDel}>
        Cancelar
      </Button></div>
    </div>




  </div>

</Modal.Body>
</Modal>

            </div>
            <br></br> <br></br>


            <div className="container item">

                <table class="table table-striped-columns">
                    <thead>
                        <tr>
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

                                <td>{nota.nombre}</td>
                                <td>{nota.apellido}</td>
                                <td>{nota.materia}</td>
                                <td>{nota.nota1}</td>
                                <td>{nota.nota2}</td>
                                <td>{nota.nota3}</td>
                                <td>{nota.promedio}</td>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button onClick={() => handleShowEdit(nota.id_usuario,nota.id_materia)} type="button" class="btn btn-dark">Editar</button>

                                    <button  onClick={() => handleShowDel(nota.id_usuario,nota.id_materia)} type="button" class="btn btn-dark">Borrar</button>
                                </div>
                            </tr>

                        </tbody>))}
                </table>

                <br></br>




            </div>







        </>
    );
}



export default DashProfesor;
