import React, { useState} from 'react';
import { useFetch } from '../../useFetch';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';

const TablaAlumnos = () => {

  //const [selectedMateria, setSelectedMateria] = useState(null);
  const token = sessionStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const id_usuario = decodedToken.id_usuario;
 // const [alumnos, setAlumnos] = useState([]);

  // Paso 1: Obtener las materias que el profesor da
  const { data: materias } = useFetch(`http://localhost:8080/api/materia/profesor-materias/${id_usuario}`);
  console.log(materias);
  debugger

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
      



  
  return (
    <>
     <div className="container col-4"><div className="container-fluid">
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
            <th scope="col">Id Alumno</th>
         
           

        </tr>
    </thead>
    {filteredData.map(nota => (
        <tbody>
            <tr >
            <td>{nota.curso}</td>
                <td>{nota.MATERIA}</td>
                <td>{nota.apellido} {nota.nombre} </td>
                <td>{nota.id_usuario}</td>
               <div class="btn-group" role="group" aria-label="Basic example">
                    <Link  to={`/dashboard/crearNota/${nota.id_materia}/${nota.id_usuario}`} type="button" class="btn btn-dark">Crear Nota </Link>

                </div> 
            </tr>

        </tbody>))}
</table>

<br></br>




</div>
     
    </>
  );
};

export default TablaAlumnos;
