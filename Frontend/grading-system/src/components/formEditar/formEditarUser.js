import React, { useState,  } from 'react';




const FormEditarUsuario = () => {


  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [mail, setMail] = useState('');
  const [id_rol, setid_rol] = useState('');





  const handleSubmit = (e) => {
    e.preventDefault();



  };


  return (
    <>
     <br></br>
            <div className='container text-center'><h2>Editar Usuario</h2></div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <form onSubmit={handleSubmit}>
             
           

              <div className="form-group">
                <label htmlFor="nombre"><h4>Nombre</h4></label>
                <input
                  type="Nombre"
                  id="Nombre"
                  name='Nombre'
                  className="form-control"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="apellido"><h4>Apellido</h4></label>
                <input
                  type="text"
                  id="apellido"
                  name='apellido'
                  className="form-control"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="dni"><h4>Dni</h4></label>
                <input
                  type="number"
                  id="dni"
                  name='dni'
                  className="form-control"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                  required
                />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="id_rol"><h4>ID Rol</h4></label>
                <input
                  type="number"
                  id="id_rol"
                  name='id_rol'
                  className="form-control"
                  value={id_rol}
                  onChange={(e) => setid_rol(e.target.value)}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="mail"><h4>Mail</h4></label>
                <input
                  type="mail"
                  id="mail"
                  name='mail'
                  className="form-control"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="password"><h4>Password</h4></label>
                <input
                 
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <br></br>

              <button type="submit" className="btn btn-primary">Editar</button>
            </form>
          </div>
        </div>
      </div></>
  );
};

export default FormEditarUsuario       