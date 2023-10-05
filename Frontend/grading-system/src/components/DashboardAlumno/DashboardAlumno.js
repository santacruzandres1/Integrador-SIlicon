import React from 'react';
import { useState } from 'react';




let datos = [
  { materia:"SQL", nota: 5, etapa: "Primer parcial"},
  { materia:"Programacion", nota:8, etapa: "Primer parcial"},
  { materia:"Matematicas", nota: 6, etapa: "Recuperatorio"}
]
const DashboardAlumno = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
      setSearchTerm(e.target.value);
  };

  const filteredData = datos.filter((item) =>
      item.materia.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <>
    <hr></hr>
     <div>
      <h2>DASHBOARD ALUMNO</h2>
      
    </div>
      <br></br>
      
      <br></br> <br></br>

      <p>Escriba el nombre de la materia que desea informarse</p>
      <div className="container col-6">
                        <form className="d-flex" role="search">
                      
                            <input className="form-control me-2"
                                type="text"
                                placeholder="Materia"

                                onChange={handleSearch}
                                value={searchTerm}
                            />
                            <span className="btn btn-dark" >Buscar</span>
                        </form>
                    </div>
<br></br>
      <div className="container item">

        <table class="table table-striped">
          <thead>
            <tr>
             
              <th scope="col">Materia</th>
              <th scope="col">Nota</th>
              <th scope="col">Etapa</th>
             

            </tr>
          </thead>
          {filteredData.map(datos => (
            <tbody>
              <tr >
               
                <td>{datos.materia}</td>
                <td>{datos.nota}</td>
                <td>{datos.etapa}</td>
            
               
              </tr>

            </tbody>))}
        </table>
        

      </div>


<br></br>





</>
);
}



export default DashboardAlumno;
        