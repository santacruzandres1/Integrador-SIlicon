import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../Header/header';



const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { rol } = useParams();

  const [user, setUser] = useState({
    email: "",
    password: ""
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



    fetch("http://localhost:8080/api/login",
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
      <div className=' container text-center'><h2>Inicio Sesión {rol} </h2></div>

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
                  type={passwordVisible ? 'text' : 'password'}
                  id="floatingPassword"
                  name='password'
                  className="form-control"
                  value={user.password}
                  onChange={handleInputChange}
                  required
                  placeholder='password'
                /> <button type='button' className='btn ' onClick={() => setPasswordVisible(!passwordVisible)}>
                  {passwordVisible ? <span class="material-symbols-outlined">
                    visibility_off
                  </span> : <span class="material-symbols-outlined">
                    visibility
                  </span>}
                </button>
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

