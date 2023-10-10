import { useFetch } from "../../useFetch";
import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormCrearUsuario from '../formCrear/formCrearUsuario';

const TablaUsuarios = () => {

  //URL de la API de usuarios
  //const { data, loading } = useFetch("http://localhost:3001/api/usuarios") ;
  const [user, setUser] = useState([])

  useEffect(() => {
    // Realiza la solicitud fetch cuando el componente se monte
    fetch("http://localhost:3000/api/usuarios")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error al cargar el usuario: ", error));
  }, [user]);


  //Filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

   const filteredData = user.filter((item) => {
     const apellido = item.apellido;
     const searchTermLowerCase = searchTerm.toLowerCase();
     const apellidoLowerCase = apellido.toLowerCase();
  
    // Esto divide el apellido en palabras separadas por espacios y verifica si alguna coincide con el término de búsqueda porque muchas veces las personas tienen dos apellidos
     const apellidosSeparados = apellidoLowerCase.split(' ');
    return apellidosSeparados.some((part) => part.startsWith(searchTermLowerCase));
   });
  
  //Modal Crear Usuario
  const [showModalCrear, setShowModalCrear] = useState(false);
  const handleCloseCrear = () => setShowModalCrear(false);
  const handleShowCrear = () => setShowModalCrear(true);


  return (
    <div className="container">
        <div class="row justify-content-center align-items-center g-2">
      
      <div className="col-2 ">  <button onClick={handleShowCrear} className="btn btn-dark"  >Agregar Usuario</button></div>
      <div className="col-4 offset-4">
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Buscar por Apellido"
          onChange={handleSearch}
          value={searchTerm}
        />
       <span className="btn btn-dark">Buscar</span>
      </div>
      </div>
      </div>

      <br></br>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Dni</th>
            <th scope="col">Email</th>
            <th scope="col">Rol</th>
          
          </tr>
        </thead>
        <tbody>
          {/* {loading && <div className="text-center">Cargando...</div>} */}
          {filteredData.map((USUARIO, index) => (
            <tr key={index}>
              <th scope="row">{USUARIO.id_usuario}</th>
              <td>{USUARIO.nombre}</td>
              <td>{USUARIO.apellido}</td>
              <td>{USUARIO.dni}</td>
              <td>{USUARIO.email}</td>
              <td>{USUARIO.rol}</td>
              <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-dark">Editar</button>
                  <button type="button" className="btn btn-dark">Borrar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModalCrear} onHide={handleCloseCrear}>
          
          <br></br>
          <Modal.Body>

          <FormCrearUsuario></FormCrearUsuario>

        </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={handleCloseCrear}>
              Cerrar
            </Button>
          </Modal.Footer>
          
          

      </Modal>

    </div>
  );
}

export default TablaUsuarios;
