import React, { useState } from 'react';


const FormCrearUsuario = () => {

  const [rol, setRol] = useState('');
  const [Nickname, setNickname] = useState('');
 
  const [password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [dni, setDni] = useState('');
  const [Email, setEmail] = useState('');





  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Usuario creado con exito');
   /* const data = { Nickname, password, dni, FirstName, LastName, Email, rol };
    console.log(data);
    fetch('http://localhost:3001/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
 */
  };


  return (
    <>
      <div className='container text-center'><h2 >Crear Usuario</h2></div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">

            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <select
                 className="form-select"
                 id="rol"
                name="rol"
                  value={rol}
                  placeholder='Rol'
                 aria-label="Default select example"
                 onChange={(e) => setRol(e.target.value)}
                 required
                 >
              <option selected value="" disabled><h4>Seleccionar Rol</h4></option>
              <option value="1">Administrador</option>
              <option value="2">Alumno</option>
              <option value="3">Profesor</option>
              
            </select>
              </div>
           <br/>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingNickname"
                  placeholder='Nickname'
                  value={Nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  required
                />
                <label htmlFor="Nickname"><h4>Nickname</h4></label>
              </div>
              <br/>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword"><h4>Password</h4></label>
              </div>
              <br/>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingFirstName"
                  name='FirstName'
                  placeholder='Nombre'
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <label htmlFor="floatingFisrtName"><h4>Nombre</h4></label>
              </div>
              <br></br>

              <div className="form-floating">
                <input
                  type="text"
                  id="floatingLastName"
                  className="form-control"
                  name='LastName'
                  value={LastName}
                  placeholder='Apellido'
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <label htmlFor="floatingLastName"><h4>Apellido</h4></label>
              </div>
              <br></br>

              <div className="form-floating">
                    <input
                      type="text"
                      id="floatingDni"
                      className="form-control"
                      name="dni"
                      value={dni}
                      placeholder='DNI'
                      onChange={(e) => {
                        //Esto es una una expresión regular para permitir solo numeros
                        const input = e.target.value;
                        const regex = /^[0-9]*$/; // <-- Expresión regular que acepta solo numeros
                        if (regex.test(input)) {
                          setDni(input); // Solo actualiza el estado si es un número válido
                        }
                      }}
                      required
                    />
                      <label htmlFor="floatingDni"><h4>DNI</h4></label>
                </div>

              <br></br>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  name='email'
                  value={Email}
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="floatingEmail"><h4>Email</h4></label>
              </div>
              <br></br>


              <button type="submit" className="btn btn-primary">Crear</button>
            </form>
          </div>
        </div>
      </div>
      <br></br>

      </>
  );
};

export default FormCrearUsuario       