import React, { useState} from 'react';
import { useFetch } from '../../useFetch';
import jwtDecode from 'jwt-decode';

const ProfesorNotasApp = () => {

  const [selectedMateria, setSelectedMateria] = useState(null);
  const token = sessionStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const id_usuario = decodedToken.id_usuario;
  const [alumnos, setAlumnos] = useState([]);

  // Paso 1: Obtener las materias que el profesor da
  const { data: materias } = useFetch(`http://localhost:8080/api/materia/profesor-materias/${id_usuario}`);
  console.log(materias);
  debugger

  const handleMateriaClick = (materia) => {
    setSelectedMateria(materia);
    // Realiza una solicitud a la API para obtener la lista de alumnos en la materia seleccionada
   fetch(`http://localhost:8080/api/usuarios/materia-alumno/${selectedMateria.id_materia}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': sessionStorage.getItem('token')
      },
    })
      .then((response) => response.json())
      .then((data) => setAlumnos(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <>
      <div>
      <h1>Lista de Materias</h1>
      <ul>
        {materias.map((data, index) => (
          <li key={index}>
            <button
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleMateriaClick(data);
              }}
            >
              <h3>{data.MATERIA}</h3>
            </button>
          </li>
        ))}
      </ul>
      {selectedMateria && (
        <div>
          <h2>Alumnos inscritos en {selectedMateria.nombre}</h2>
          <ul>
            {alumnos.map((alumno) => (
              <li key={alumno.id}>
                {alumno.nombre} {alumno.apellido}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default ProfesorNotasApp;
