import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FormCrearMateria from "../formCrear/formCrearMateria";
import { useFetch } from "../../useFetch";

const TablaMaterias = () => {

  const { data: materia } = useFetch("http://localhost:3000/api/materia");
    
    //Filtro de búsqueda
    const [searchTerm, setSearchTerm] = useState('');


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
      const filteredData = materia.filter((item) => {
        const materia = item.nombre;
        const searchTermLowerCase = searchTerm.toLowerCase();
        const materiaLowerCase = materia.toLowerCase();
        const materiaSeparados = materiaLowerCase.split(' ');
        return materiaSeparados.some((part) => part.startsWith(searchTermLowerCase));
      }); 

    //Modal Crear Materia
    const [showModalCrear, setShowModalCrear] = useState(false);
    const handleCloseCrear = () => setShowModalCrear(false);
    const handleShowCrear = () => setShowModalCrear(true);

    return(
        <div className="container">
            <div class="row justify-content-center align-items-center g-2">
                <div className="col-2 ">  <button onClick={handleShowCrear} className="btn btn-dark"  >Agregar Materia</button></div>
                <div className="col-4 offset-4">
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Buscar por Nombre"
                            onChange={handleSearch}
                            value={searchTerm}
                        />
                        <span className="btn btn-dark">Buscar</span>
                    </div>
                </div>
            </div>
            <br></br>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Materia</th>
                        <th scope="col">Profesor</th>
                        <th scope="col">Curso</th>
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
                                <button className="btn btn-dark">Editar</button>
                                <button className="btn btn-dark">Eliminar</button>
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
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCrear}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )


}
export default TablaMaterias;