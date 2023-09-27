import React, { useState,  } from 'react';




const FormEditarUsuario = () => {

  const [Nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApeliido] = useState('');
  const [mail, setMail] = useState('');
  const [rol, setRol] = useState('');





  const handleSubmit = (e) => {
    e.preventDefault();



  };


  return (
    <>
      <div className='container'><h2>Editar Usuario</h2></div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nickname"><h4>Nickname</h4></label>
                <input
                  type="Nickname"
                  id="Nickname"
                  className="form-control"
                  value={Nickname}
                  onChange={(e) => setNickname(e.target.value)}
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
                  type="apellido"
                  id="apellido"
                  name='apellido'
                  className="form-control"
                  value={apellido}
                  onChange={(e) => setApeliido(e.target.value)}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="dni"><h4>Dni</h4></label>
                <input
                  type="dni"
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
                <label htmlFor="rol"><h4>Rol</h4></label>
                <input
                  type="rol"
                  id="rol"
                  name='rol'
                  className="form-control"
                  value={rol}
                  onChange={(e) => setRol(e.target.value)}
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

              <button type="submit" className="btn btn-primary">Editar</button>
            </form>
          </div>
        </div>
      </div></>
  );
};

export default FormEditarUsuario       