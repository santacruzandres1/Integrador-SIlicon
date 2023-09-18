import React from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';


function App() {

 
  return (
    <div className="App">
      <header className="App-header"> 
        <h1>Sistema de Calificaciones</h1>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About As</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/Administracion/dashboard">Administracion</NavLink></li>
          </ul>
        </nav>
      </header>
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
