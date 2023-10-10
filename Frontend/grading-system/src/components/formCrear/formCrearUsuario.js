import React, { useState } from 'react';


const FormCrearUsuario = () => {

  const [user, setUser] = useState({
    nombre:"",
    apellido:"",
    email:"",
    password:"",
    dni:null,
    id_rol:null

  });
  // const [password, setPassword] = useState('');
  // const [dni, setDni] = useState('');
  // const [nombre, setNombre] = useState('');
  // const [apellido, setApeliido] = useState('');
  // const [email, setMail] = useState('');
  // const [id_rol, setid_rol] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()

  

    fetch("http://localhost:3000/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Usuario creado:", data);
        alert('Usuario creado con exito');
     
        
      })
      .catch((error) => console.error("Error al crear el usuario: ", error));
  }
  




 


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
                  value={user.id_rol}
                  placeholder='Rol'
                 aria-label="Default select example"
                 onChange={handleInputChange}
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
                  placeholder='nombre'
                  value={user.nombre}
                  onChange={handleInputChange}
                  name='nombre'
                  required
                />
                <label htmlFor="Nickname"><h4>Nombre</h4></label>
              </div>
              <br/>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder='Password'
                  value={user.password}
                  name='password'
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="floatingPassword"><h4>Password</h4></label>
              </div>
              <br/>
            

              <div className="form-floating">
                <input
                  type="text"
                  id="floatingLastName"
                  className="form-control"
                  name='apellido'
                  value={user.apellido}
                  placeholder='Apellido'
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="floatingLastName"><h4>Apellido</h4></label>
              </div>
              <br></br>

              <div className="form-floating">
                    <input
                      type="number"
                      id="floatingDni"
                      className="form-control"
                      name="dni"
                      value={user.dni}
                      placeholder='DNI'
                      onChange={handleInputChange}
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
                  value={user.email}
                  placeholder='Email'
                  onChange={handleInputChange}
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