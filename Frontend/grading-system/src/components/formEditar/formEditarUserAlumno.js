import { useState, useEffect } from 'react';
import DataUser from '../datosUser';

function EditUserAlumno({  handleClose }) {

  const {data:user}=DataUser()
  const [item, setItem] = useState({});

  useEffect(() => {
    if (user) {
      setItem({
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email ,
        password: user.password,
        dni: user.dni ,
        id_rol: user.id_rol ,
        id_curso: user.curso ,
      });
    }
  }, [user]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/usuarios/${user.id_usuario}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': sessionStorage.getItem('token')
      },
      body: JSON.stringify(item),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Elemento actualizado con éxito');
          handleClose();
          window.location.reload()
        } else {
          console.error('Error al actualizar el elemento');
          alert('Error al actualizar el elemento, Intente nuevamente');
        }
      })
      .catch((error) => {
        console.error('Error de red:', error);
        error('Error de red:', error);
      });
  };

 
const rol =user.id_rol

debugger

if(rol===1){
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <form onSubmit={handleSubmit}>
             
              <label htmlFor="nombre"><h4>Nombre</h4></label>
              <div className="form-group">
                <input
                placeholder='nombre'
                  type="text"
                  id="nombre"
                  name='nombre'
                  className="form-control"
                  value={item.nombre}
            onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="apellido"><h4>Apellido</h4></label>
                <input
                  type="text"
                  id="apellido"
                  name='apellido'
                  className="form-control"
                  value={item.apellido}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="dni"><h4>DNI</h4></label>
                <input
                  type="tel"
                  id="dni"
                  name='dni'
                  className="form-control"
                  value={item.dni}
            onChange={handleInputChange}
                  required
                />
              </div>
            

              <div className="form-group">
                <label htmlFor="password"><h4>Password</h4></label>
                <input
                 name='password'
                  type="password"
                  id="password"
                  className="form-control"
                  value={item.password}
            onChange={handleInputChange}
                  required
                />
              </div>

            

              <button type="submit" className="btn btn-primary">Editar</button>
            </form>
          </div>
        </div>
      </div>
      </>
  );}
  if(rol===1 || rol===2){
    return (
      <>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
  
              <form onSubmit={handleSubmit}>
               
                <label htmlFor="nombre"><h4>Nombre</h4></label>
                <div className="form-group">
                  <input
                  placeholder='nombre'
                    type="text"
                    id="nombre"
                    name='nombre'
                    className="form-control"
                    value={item.nombre}
              onChange={handleInputChange}
                    required
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="apellido"><h4>Apellido</h4></label>
                  <input
                    type="text"
                    id="apellido"
                    name='apellido'
                    className="form-control"
                    value={item.apellido}
                    onChange={handleInputChange}
                    required
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="dni"><h4>DNI</h4></label>
                  <input
                    type="number"
                    id="dni"
                    name='dni'
                    className="form-control"
                    value={item.dni}
              onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><h4>Email</h4></label>
                  <input
                    type="email"
                    id="email"
                    name='email'
                    className="form-control"
                    value={item.email}
              onChange={handleInputChange}
                    required
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="password"><h4>Password</h4></label>
                  <input
                   name='password'
                    type="password"
                    id="password"
                    className="form-control"
                    value={item.password}
              onChange={handleInputChange}
                    required
                  />
                </div>
  
              
               
  
                <button type="submit" className="btn btn-primary">Editar</button>
              </form>
            </div>
          </div>
        </div>
        </>
    );}

};

export default EditUserAlumno;     


