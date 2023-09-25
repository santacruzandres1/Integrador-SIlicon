import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormCrearUsuario from './components/formCrear/formCrearUsuario';

function App() {

 
  return (
    <div className="App">
     
      
      
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/login/:rol`} element={<Login />} />
        <Route path="/:rol/dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<h1>Contact</h1>} />
        <Route path="/not-found" element={<h1>Not Found</h1>} />
        <Route path="/crearUsuario" element={<FormCrearUsuario />} />

      </Routes>
    </div>
  );
}

export default App;
