import React, { useState, useEffect } from 'react';
import { useFetch } from '../../useFetch';


const ProfesorNotasApp = () => {
  const [materias, setMaterias] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [selectedMateria, setSelectedMateria] = useState(null);
  const [notas, setNotas] = useState([]);

  // Paso 1: Obtener las materias que el profesor da
    // Realiza una solicitud a la API para obtener las materias del profesor
    // Puedes usar axios, fetch, u otra biblioteca para hacer la solicitud.
    // Ejemplo:
    // axios.get('/api/materias').then((response) => setMaterias(response.data));
    const { data } = useFetch(`http://localhost:8080/api/materia/profesor-materias`) ;


  // Paso 2: Obtener los alumnos inscritos en la materia seleccionada
  useEffect(() => {
    if (selectedMateria) {
      // Realiza una solicitud a la API para obtener los alumnos inscritos en la materia
      // Puedes usar el ID de la materia seleccionada para obtener datos específicos.
      // Ejemplo:
      // axios.get(`/api/alumnos/${selectedMateria.id}`).then((response) => setAlumnos(response.data));
    }
  }, [selectedMateria]);

  // Paso 3: Crear una interfaz para mostrar la lista de alumnos y permitir la entrada de notas

  const handleSelectMateria = (materia) => {
    setSelectedMateria(materia);
  };

  const handleGuardarNotas = () => {
    // Aquí debes enviar las notas al servidor a través de una solicitud POST.
    // Puedes iterar a través de la lista de notas y enviar los datos al servidor.
  };

  return (
    <div>
      <h1>Registro de Notas para Profesor</h1>
      <label>Seleccione una materia:</label>
      <select onChange={(e) => handleSelectMateria(e.target.value)}>
        <option value="">Seleccionar Materia</option>
        {materias.map((materia) => (
          <option key={materia.id} value={materia}>
            {materia.nombre}
          </option>
        ))}
      </select>
      {selectedMateria && (
        <div>
          <h2>Alumnos inscritos en {selectedMateria.nombre}</h2>
          <ul>
            {alumnos.map((alumno) => (
              <li key={alumno.id}>
                {alumno.nombre} {alumno.apellido}
                <input
                  type="text"
                  placeholder="Nota 1"
                  onChange={(e) => handleNotaChange(alumno.id, 'periodo_1', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Nota 2"
                  onChange={(e) => handleNotaChange(alumno.id, 'periodo_2', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Nota 3"
                  onChange={(e) => handleNotaChange(alumno.id, 'periodo_3', e.target.value)}
                />
              </li>
            ))}
          </ul>
          <button onClick={handleGuardarNotas}>Guardar Notas</button>
        </div>
      )}
    </div>
  );
};

export default ProfesorNotasApp;