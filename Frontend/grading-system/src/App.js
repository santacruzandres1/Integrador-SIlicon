import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact/contact';

import FormCrearUsuario from './components/formCrear/formCrearUsuario';
import EditUser from './components/formEditar/formEditarUser';
import FormEditMateria from './components/formEditar/formEditMateria';


function App() {

 
  return (
    <div className="App">
     
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/login/:rol`} element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/not-found" element={<h1>Not Found</h1>} />
        <Route path="/crearUsuario" element={<FormCrearUsuario />} />
        <Route path={`/dashboard/editUser/:id_usuario`} element={<EditUser />} />
        <Route path={`/dashboard/editMateria/:id_materia`} element={<FormEditMateria />} />
      </Routes>
    </div>
  );
}

export default App;
