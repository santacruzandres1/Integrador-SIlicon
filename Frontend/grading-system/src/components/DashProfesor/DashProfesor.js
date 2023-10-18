import React from 'react';
import { useState } from 'react';

import { useFetch } from '../../useFetch';
import jwtDecode from 'jwt-decode';
import TablaAlumnos from './TablaAlumnos';
import { Link } from 'react-router-dom';


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
    const materia = item.materia[0];
    const apellido = item.apellido[0];
    const searchTermMateriaLowerCase = searchTerm.toLowerCase();
    const searchTermApellidoLowerCase = searchTermApellido.toLowerCase();
    const notaMateriaLowerCase = materia.toLowerCase();
    const notaApellidoLowerCase = apellido.toLowerCase();

  const materiaMatches = notaMateriaLowerCase.includes(searchTermMateriaLowerCase);
    const apellidoMatches = notaApellidoLowerCase.includes(searchTermApellidoLowerCase);
  
    return materiaMatches && apellidoMatches;
  });
      
  
  
    

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
                                placeholder="Buscar por Materia"

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

       

            </div>
            <br></br> <br></br>


            <div className="container item">

                <table class="table table-striped-columns">
                    <thead>
                        <tr>
                         
                            <th scope="col">ALumno</th>
                        
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
                            
                        
                                <td>{nota.apellido}</td>
                                <td>{nota.materia}</td>
                                <td>{nota.nota1}</td>
                                <td>{nota.nota2}</td>
                                <td>{nota.nota3}</td>
                                <td>{nota.promedio}</td>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                <Link  to={`/dashboard/editarNota/${nota.id_materia}/${nota.id_usuario}`} type="button" class="btn btn-dark">Editar Nota </Link>
                                </div>
                            </tr>

                        </tbody>))}
          </table>
            </div>
        </>
    );
}



export default DashProfesor;
