import React from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

 
  return (
    <div className="App">
      <header className="container App-header"> 
        <h1>Sistema de Calificaciones</h1>
        <div className="container">
        <div className="d-flex justify-content-end">
    


      
          <ul className="list-inline-item  ">
            <li className="list-inline-item"><NavLink to="/">Home</NavLink></li>
            <li className="list-inline-item"><NavLink to="/About">About As</NavLink></li>
            <li className="list-inline-item"><NavLink to="/Contact">Contact</NavLink></li>
            <li className="list-inline-item"><NavLink to="/Administracion/dashboard">Administracion</NavLink></li>
          </ul></div></div>
         
        
      
      </header>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/login/:rol`} element={<Login />} />
        <Route path="/:rol/dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<h1>Contact</h1>} />
        <Route path="/not-found" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
