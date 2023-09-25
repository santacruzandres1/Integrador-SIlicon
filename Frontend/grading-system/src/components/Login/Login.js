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

//    return (
//      <div>
//        <h2>Login {rol}</h2>
//       <form>
//         <label>Usuario</label>
//        <input type="text" placeholder='Usuario o DNI' />
//          <label>Contraseña</label>
//          <input type="password" placeholder='Password' />
        //   {user ? (
        //    <button type="button" onClick={logOut}>Log Out</button>
        //  ) : (
        //   <button type="button"  onClick={login}>Log In</button>
        //  )}
//     </form>
//     </div>
//    );
//  };

//  export default Login;



//  const Login = () => {
  const [Nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleNicknameChange = (e) => {
     setNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
     e.preventDefault();

      
     
   };

  return (
    <>
    <div className='container'><h2>Login {rol}</h2></div>
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
              onChange={handleNicknameChange}
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
             onChange={handlePasswordChange}
           required
            />
           </div>
       <br></br>
       {user ? (
           <button className="btn btn-primary" type="button" onClick={logOut}>Log Out</button>
         ) : (
          <button className="btn btn-primary" type="button"  onClick={login}>Log In</button>
         )}
        
       </form>
     </div>
   </div>
   </div></>
  );
 };

  

  export default Login;
