 import React, { useState } from 'react';
 import {  useNavigate } from 'react-router-dom';


import { toast} from 'react-toastify';
import Header from '../Header/header';



  const Login = () => {

    
   const [user, setUser] = useState({
    email:"",
    password:""
   });

   const navigate = useNavigate();

     const handleInputChange = (e) => {

    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  

    fetch("http://localhost:3000/api/login",
     {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
        .then(res => {
            return res.json()
               .then(body => {
               return {
                  status: res.status,
                  ok: res.ok,
                  headers: res.headers,
                  body: body
              };
          })
          
  }).then(
      (result) => {
        if (result.ok) {
          sessionStorage.setItem('token', result.body.accessToken);
          
       navigate('/dashboard')
          toast.success("Bienvenido", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
        
      } else {
          toast.error('Email o Password incorrectos', {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
      }
  }
).catch(
  (error) => {
      toast.error('Email o Password incorrectos', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
  }
);
  }

 


  return (
    <>
<Header></Header>
   <br></br>
    <div className=' container text-center'><h2>Iniciar Sesión</h2></div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="form-floating">
             
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder='email'
                  value={user.email}
                  onChange={handleInputChange}
                  name='email'
                  required
                />
                 <label htmlFor="floatingEmail"><h4>Email</h4></label>
              </div>
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
              <br></br>
              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
              </form>
           </div>
        </div>
       </div>
      
    </>
  );
 };



  export default Login;


  // <div className='container'><h2>Login {rol}</h2></div>
  //    <div className="container mt-5">
  //    <div className="row justify-content-center">
  //    <div className="col-md-6">
        
  //       <form onSubmit={handleSubmit}>
  //       <div className="form-group">
  //       <label htmlFor="email"><h4>Email</h4></label>
  //           <input
  //             type="email"
  //            id="email"
  //            className="form-control"
  //             value={email}
  //             onChange={handleEmailChange}
  //             required
  //           />
  //         </div>
  //         <br></br>
          
  //     <div className="form-group">
  //           <label htmlFor="password"><h4>Password</h4></label>
  //          <input
  //            type="password"
  //             id="password"
  //             className="form-control"
  //            value={password}
  //            onChange={handlePasswordChange}
  //          required
  //           />
  //          </div>
  //      <br></br>
  //      {user ? (
  //          <button className="btn btn-primary" type="button" onClick={logOut}>Log Out</button>
  //        ) : (
  //         <button className="btn btn-primary" type="button"  onClick={login}>Log In</button>
  //        )}
        
  //      </form>
  //    </div>
  //  </div>
  //  </div>