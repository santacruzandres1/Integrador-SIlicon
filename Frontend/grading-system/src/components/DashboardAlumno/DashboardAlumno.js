import React from 'react';
import { useState } from 'react';




let datos = [
  { materia:"SQL", periodo_1: 5, periodo_2: 8, periodo_3:5},
  { materia:"Programacion", periodo_1: 5, periodo_2: 8, periodo_3:5},
  { materia:"Matematicas", periodo_1: 5, periodo_2: 8, periodo_3:5}
]
const DashboardAlumno = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
      setSearchTerm(e.target.value);
  };

  const filteredData = datos.filter((item) =>
      item.materia[0].toLowerCase().includes(searchTerm.toLowerCase())
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
             
              <th scope="col">Periodo 1</th>
              <th scope="col">Periodo 2</th>
              <th scope="col">Periodo 3</th>

            </tr>
          </thead>
          {filteredData.map(datos => (
            <tbody>
              <tr >
               
                <td>{datos.materia}</td>
                
                <td>{datos.periodo_1}</td>
                <td>{datos.periodo_2}</td>
                <td>{datos.periodo_3}</td>
            
               
              </tr>

            </tbody>))}
        </table>
        

      </div>


<br></br>





</>
);
}



export default DashboardAlumno;
        