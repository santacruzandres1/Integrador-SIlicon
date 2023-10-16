import { useState } from "react";
import { Modal } from "react-bootstrap";
import FormCrearMateria from "../formCrear/formCrearMateria";
import { useFetch } from "../../useFetch";
import { Link } from "react-router-dom";

const TablaMaterias = () => {

  const { data: materia } = useFetch("http://localhost:8080/api/materia");
    
  const [Eliminar, setEliminar] = useState();
  const [showModalDel, setShowModalDel] = useState(false);
  const handleCloseDel = () => setShowModalDel(false);
  const handleShowDel = (id) => {
    setEliminar(id);

    setShowModalDel(true);

  };

  const handleSubmit = () => {
    // Realiza una solicitud Fetch para eliminar el usuario en el servidor
    fetch(`http://localhost:8080/api/materia/${Eliminar}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Elemento eliminado con éxito');
          setShowModalDel(false);
          // Realizar cualquier otra acción después de eliminar el usuario si es necesario
        } else {
          console.error('Error al eliminar el usuario');
        }
      })
      .catch((error) => {
        console.error('Error de red:', error);
      });
  }
    //Filtro de búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
      const filteredData = materia.filter((item) => {
        const materia = item.MATERIA;
        const searchTermLowerCase = searchTerm.toLowerCase();
        const materiaLowerCase = materia.toLowerCase();
        const materiaSeparados = materiaLowerCase.split(' ');
        return materiaSeparados.some((part) => part.startsWith(searchTermLowerCase));
      }); 

    //Modal Crear Materias
    const [showModalCrear, setShowModalCrear] = useState(false);
    const handleCloseCrear = () => setShowModalCrear(false);
    const handleShowCrear = () => setShowModalCrear(true);


    return(
        <>
        <div className="container">
            <div class="row justify-content-center align-items-center g-2">
            <h3>Administracion de Mateiras</h3>
                <div className="col-2 ">  
                  <button onClick={handleShowCrear} className="btn btn-dark"  >Agregar Materia
                  </button>
                </div>
                <div className="col-4 offset-4">
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Buscar por Materia"
                            onChange={handleSearch}
                            value={searchTerm}
                        />
                        <span className="btn btn-dark">Buscar</span>
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col-2">ID</th>
                        <th scope="col-2">Materia</th>
                        <th scope="col-2">Profesor</th>
                        <th scope="col-2">Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((materia, index) => (
                        <tr key={index}>
                            <td>{materia.id_materia}</td>
                            <td>{materia.MATERIA}</td>
                            <td>`{materia.nombre}, {materia.apellido}`</td>
                            <td>{materia.CURSO}</td>
                            <td>
                              <div className="btn-group" role="group" aria-label="Basic example">
                                            <Link to={`/dashboard/editMateria/${materia.id_materia}`} className="btn btn-dark">Editar</Link>
                                        
                                          <button onClick={() => handleShowDel(materia.id_materia)} type="button" className="btn btn-dark">Borrar</button>
                                          </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={showModalCrear} onHide={handleCloseCrear}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Materia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormCrearMateria />
                </Modal.Body>
            </Modal>

            <Modal show={showModalDel} onHide={handleCloseDel}>

          <Modal.Body >
     

            <div className='container  text-center '>
              <strong>¿Está seguro que desea eliminar este usuario?</strong>
              <div className='row  '>
                <div className='col'> <button onClick={handleSubmit} className="btn btn-danger">Eliminar</button></div>
                <div className='col offset-1'> <button className="btn btn-dark" variant="secondary" onClick={handleCloseDel}>
                  Cancelar
                </button></div>
              </div>




            </div>

          </Modal.Body>

        </Modal>

        </div>
        </>
    )


}
export default TablaMaterias;