import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // Petición al servidor
    setUser({
      id: 1,
      username: 'Admin',
      name: 'Andres',
      rol: 'Administracion'
    });
  };

  const logOut = () => {
    setUser(null);
  };

  const { rol } = useParams();
  console.log(user);

  return (
    <div>
      <h2>Login {rol}</h2>
      <form>
        <label>Usuario</label>
        <input type="text" placeholder='Usuario o DNI' />
        <label>Contraseña</label>
        <input type="password" placeholder='Password' />
        {user ? (
          <button type="button" onClick={logOut}>Log Out</button>
        ) : (
          <button type="button"  onClick={login}>Log In</button>
        )}
      </form>
    </div>
  );
};

export default Login;
