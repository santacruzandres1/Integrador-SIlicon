import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import * as FaIcons from 'react-icons/fa';
import { CardGroup } from 'react-bootstrap';



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

           
            <div className='rol'>

                <ul> 
                <div className="row justify-content-center align-items-center g-2">
                {rol.map(rol => (
                     <div className="col">
                       <Card style={{ width: '18rem' }}>
    
      <Card.Body>
        { rol.name === 'Alumnos' ? <Card.Img variant="top" src="" /> : null }
      <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Title>{rol.name}</Card.Title>
        <Card.Text>
         {rol.descripcion}
        </Card.Text>
        <Link  class="btn btn-primary " to={`/login/${rol.name}`}>Ingresar</Link> 
      </Card.Body>
    </Card>
                    <li key={rol.id}>
                      
                    </li>
                    </div>
                ))}
                </div>
                </ul>
            </div>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

        </div>
    )
}
export default LoginRol;

