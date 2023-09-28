import React from 'react';
import { Link } from 'react-router-dom';

export const rol = [
    { id: 1, name: 'Docentes', imageID: 'https://www.flaticon.es/svg/static/icons/svg/3135/3135715.svg' },
    { id: 2, name: 'Alumnos', imageID: 'https://www.flaticon.es/svg/static/icons/svg/3135/3135715.svg'  },
    { id: 3, name: 'Administracion', imageID: 'https://www.flaticon.es/svg/static/icons/svg/3135/3135715.svg' }
]  
const LoginRol = () => {  
    
    return (
        <div>
            <h3>Ingresa segun corresponda</h3>
            <br></br>
            <div className='rol'>

                <ul> 
                <div class="row justify-content-center align-items-center g-2">
                {rol.map(rol => (
                     <div class="col">
                    <li key={rol.id}>
                      <Link  class="btn btn-dark" to={`/login/${rol.name}`}>{rol.name}</Link> 
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

<div class="container ">
<h3>Seleccione que desea administrar</h3><br></br><br></br>
<div class="row justify-content-center align-items-center g-2">
  <div class="col">
    <Link to='#usuario' class="btn btn-dark">Usuarios</Link>
  </div>
  <div class="col">
    <Link to="#materia" class="btn btn-dark">Materias</Link></div>
  <div Link to="#curso" class="col"><button type="button" class="btn btn-dark">Cursos</button></div>
</div>
</div>