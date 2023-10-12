import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormCrearUsuario from '../formCrear/formCrearUsuario';
import { useFetch } from '../../useFetch';
import { Link } from 'react-router-dom';

const TablaUsuarios = () => {

  


  const { data } = useFetch("http://localhost:3000/api/usuarios");
  

  const [usuarioAEliminar, setUsuarioAEliminar] = useState();
const [showModalDelUser, setShowModalDelUser] = useState(false);
const handleCloseDelUser = () => setShowModalDelUser(false);
const handleShowDelUser = (id) => {
  setUsuarioAEliminar(id);
  setShowModalDelUser(true);


};





const handleSubmit = () => {

  
  
    // Realiza una solicitud Fetch para eliminar el usuario en el servidor
    fetch(`http://localhost:3000/api/usuarios/${usuarioAEliminar}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Elemento eliminado con éxito');
          setShowModalDelUser(false);
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

   const filteredData = data.filter((item) => {
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
    <>
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
                <Link to={`/dashboard/${USUARIO.id_usuario}`} className="btn btn-dark">Editar</Link>
               
                <button onClick={() => handleShowDelUser(USUARIO.id_usuario)} type="button" className="btn btn-dark">Borrar</button>
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
        <Modal show={showModalDelUser} onHide={handleCloseDelUser}>

          <Modal.Body >
     

            <div className='container  text-center '>
              <br></br>
              <strong>¿Está seguro que desea eliminar este usuario?</strong><br></br><br></br>
              <div className='row  '>
                <div className='col'> <button onClick={handleSubmit} className="btn btn-danger">Eliminar</button></div>
                <div className='col offset-1'> <button className="btn btn-dark" variant="secondary" onClick={handleCloseDelUser}>
                  Cancelar
                </button></div>
              </div>




            </div>

          </Modal.Body>

        </Modal>

    </div></>
  );
}

export default TablaUsuarios;
