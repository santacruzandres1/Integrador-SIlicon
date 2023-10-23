import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card'; 


export const rol = [
    { id: 1, name: 'Docentes',descripcion:'Gestione las calificaciones de los alumnos', imageID: 'https://www.flaticon.es/svg/static/icons/svg/3135/3135715.svg' },
    { id: 2, name: 'Alumnos',descripcion:'Vea sus calificaciones', imageID: 'https://www.flaticon.es/svg/static/icons/svg/3135/3135715.svg'  },
    { id: 3, name: 'Administracion',descripcion:'Gestione usuarios, cursos y materias de la institución', imageID: 'https://www.flaticon.es/svg/static/icons/svg/3135/3135715.svg' }
]  
const LoginRol = () => {  
    
    return (
        <div>
            <h3>Ingresá según corresponda</h3>
            <br></br>

           
            <div className='rol container'>

                <ul> 
                <div className="row justify-content-center align-items-center g-2">
                {rol.map(rol => (
                     <div className="col">
                       <Card style={{ width: '18rem' }}>
    
      <Card.Body>
        <Card.Title>{rol.name}</Card.Title>
        <Card.Text>
         {rol.descripcion}
        </Card.Text>
        <Link  className="btn btn-dark " to={`/login/${rol.name}`}>Ingresar</Link> 
      </Card.Body>
    </Card>
                    <li key={rol.id}>
                      
                    </li>
                    </div>
                ))}
                </div>
                </ul>
            </div>
            
        </div>
    )
}
export default LoginRol;

<div className="container ">
<h3>Seleccione que desea administrar</h3><br></br><br></br>
<div className="row justify-content-center align-items-center g-2">
  <div className="col">
    <Link to='#usuario' className="btn btn-dark">Usuarios</Link>
  </div>
  <div className="col">
    <Link to="#materia" className="btn btn-dark">Materias</Link></div>
  <div Link to="#curso" className="col"><button type="button" className="btn btn-dark">Cursos</button></div>
</div>
</div>