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
            <div className='rol'>
                <ul> 
                {rol.map(rol => (
                    <li key={rol.id}>
                      <Link  to={`/login/${rol.name}`}>{rol.name}</Link> 
                    </li>
                ))}
                </ul>
            </div>
            
        </div>
    )
}
export default LoginRol;

 