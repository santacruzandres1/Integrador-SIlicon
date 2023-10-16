import React, {useState} from 'react';
import { useFetch } from "../../useFetch";
import { Modal } from 'react-bootstrap';
import FormCrearCurso from '../formCrear/formCrearCurso';
import FormEditCurso from '../formEditar/formEditCurso';


const TablaCursos = () => {

    const {data : curso} = useFetch("http://localhost:8080/api/curso");

    const [Eliminar, setEliminar] = useState();
    const [showModalDel, setShowModalDel] = useState(false);
    const handleCloseDel = () => setShowModalDel(false);
    const handleShowDel = (id) => {
      setEliminar(id);

      setShowModalDel(true);

    };

    const handleSubmit = () => {

        fetch(`http://localhost:8080/api/curso/${Eliminar}`, {
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

    //Filtro de búsqueda
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      }

    const filteredData = curso.filter((item) => {
        const curso = item.nombre;
        const searchTermLowerCase = searchTerm.toLowerCase();
        const cursoLowerCase = curso.toLowerCase();
        const cursoSeparados = cursoLowerCase.split(' ');
        return cursoSeparados.some((part) => part.startsWith(searchTermLowerCase));
      });

    //Modal Crear Cursos
    const [showModalCreate, setShowModalCreate] = useState(false);
    const handleShowCreate = () => setShowModalCreate(true);

    //Modal Editar Cursos
    const [cursoEditar, setCursoEditar] = useState();
    const [showModalEdit, setShowModalEdit] = useState(false);

    const handleShowEdit = (id) => {
        const cursoParaEditar = curso.find((curso) => curso.id_curso === id);
        if (cursoParaEditar) {
          setCursoEditar(cursoParaEditar);
          setShowModalEdit(true);
        }
      }

    const handleClose = () => {
        setShowModalCreate(false);
        setShowModalEdit(false);
    }


    return(
        <>
        <div className="container">
        <div class="row justify-content-center align-items-center g-2">
                <div className="col-2">
                    <button onClick={handleShowCreate} className="btn btn-dark">Agregar Curso</button>
                </div>

                <div className="col-4 offset-4">
                    <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <span className="btn btn-dark">
                        Buscar
                    </span>
                    </div>    
                </div>
        </div>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Curso</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((curso, index) => (
                    <tr key={index}>
                        <td>{curso.id_curso}</td>
                        <td>{curso.nombre}</td>
                        <td>  <div className="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" onClick={() => handleShowEdit(curso.id_curso)} className="btn btn-dark">Editar</button>
                                        
                                            <button className="btn btn-dark" onClick={() => handleShowDel(curso.id_curso)}>Borrar</button>
                                          </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
            
       <Modal show= {showModalCreate || showModalEdit} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{showModalCreate ? 'Crear Curso' : 'Editar Curso'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showModalCreate ? <FormCrearCurso handleClose={handleClose} /> : <FormEditCurso curso={cursoEditar} handleClose={handleClose} />}
                </Modal.Body>
            </Modal>
                
                {/* Modal Eliminar Curso */}
            <Modal show={showModalDel} onHide={handleCloseDel}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Curso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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

export default TablaCursos;