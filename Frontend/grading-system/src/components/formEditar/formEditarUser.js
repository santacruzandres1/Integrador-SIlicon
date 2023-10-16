import { useState, useEffect } from 'react';

function EditUser({ user, handleClose }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    if (user) {
      setItem({
        nombre: user.nombre || '',
        apellido: user.apellido || '',
        email: user.email || '',
        password: user.password || '',
        dni: user.dni || null,
        id_rol: user.id_rol || null,
        id_curso: user.curso || null,
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
          window.location.reload();
          
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

              <div className="form-group">
                <label htmlFor="id_rol"><h4>Rol</h4></label>
                <input
                  type="number"
                  id="id_rol"
                  name='id_rol'
                  className="form-control"
                  value={item.id_rol}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="id_curso"><h4>Curso</h4></label>
                <input
                  type="number"
                  id="id_curso"
                  name='id_curso'
                  className="form-control"
                  value={item.id_curso}
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
  );
};

export default EditUser;     


