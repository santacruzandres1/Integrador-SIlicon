import React, { useState} from 'react';
import { useFetch } from '../../useFetch';
import DataUser from '../datosUser';
import { Link } from 'react-router-dom';

const TablaAlumnos = () => {

  //const [selectedMateria, setSelectedMateria] = useState(null);
  const {data} = DataUser()
  const id_usuario = data.id_usuario;
 // const [alumnos, setAlumnos] = useState([]);

 const [paginaActual, setPaginaActual] = useState(1);

 //iniciar cantidad de datos por página
 const ITEMS_PER_PAGE = 5;

  // Paso 1: Obtener las materias que el profesor da
  const { data: materias } = useFetch(`http://localhost:8080/api/materia/profesor-materias/${id_usuario}`);

  const [searchTerm, setSearchTerm] = useState('');

  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
 
  const filteredData = materias.filter((item) => {
    const apellido = item.MATERIA;
     const searchTermLowerCase = searchTerm.toLowerCase();
    const apellidoLowerCase = apellido.toLowerCase();
     const apellidosSeparados = apellidoLowerCase.split(' ');
    return apellidosSeparados.some((part) => part.startsWith(searchTermLowerCase));
  });
      
  const paginatedData = filteredData.slice(
    (paginaActual - 1) * ITEMS_PER_PAGE,
    paginaActual * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setPaginaActual(pageNumber);
  };

  const handlePreviousPage = () => {
    setPaginaActual((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPaginaActual((prevPage) => Math.min(prevPage + 1, totalPages));
  };



  
  return (
    <>
    <br></br>
    <h2>Alumnos Inscriptos en sus Materias</h2>
    <br></br>
     <div className="container "><div className="container-fluid">
                        <form className="d-flex" role="search">

                            <input className="form-control me-2"
                                type="text"
                                placeholder="Buscar por Materia"

                                onChange={handleSearch}
                                value={searchTerm}
                            />
                            <span className="btn btn-dark" >Buscar</span>
                        </form>
                    </div></div><br></br>
    <div className="container item">

<table class="table table-striped-columns">
    <thead>
        <tr>
        <th scope="col">Curso</th>
            <th scope="col">Materia</th>
            <th scope="col">Alumno</th>
          
         
           

        </tr>
    </thead>
    {paginatedData.map(nota => (
        <tbody>
            <tr >
            <td>{nota.curso}</td>
                <td>{nota.MATERIA}</td>
                <td>{nota.apellido} {nota.nombre} </td>
                
               <div class="btn-group" role="group" aria-label="Basic example">
                    <Link  to={`/dashboard/crearNota/${nota.id_materia}/${nota.id_usuario}/${nota.apellido}`} type="button" class="btn btn-dark">Crear Nota </Link>

                </div> 
            </tr>

        </tbody>))}
</table>

<br></br>

        <nav aria-label="Page navigation">
  <ul className="pagination justify-content-center">
    <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
      <button className="page-link" onClick={handlePreviousPage}>
        Previous
      </button>
    </li>
    {Array.from({ length: totalPages }, (_, index) => (
      <li
        key={index}
        className={`page-item ${paginaActual === index + 1 ? 'active' : ''}`}
      >
        <button
          className="page-link"
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      </li>
    ))}
    <li className={`page-item ${paginaActual === totalPages ? 'disabled' : ''}`}>
      <button className="page-link" onClick={handleNextPage}>
        Next
      </button>
    </li>
  </ul>
</nav>




</div>
     
    </>
  );
};

export default TablaAlumnos;
