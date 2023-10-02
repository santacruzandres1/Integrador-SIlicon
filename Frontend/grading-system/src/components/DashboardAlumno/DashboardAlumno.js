import React from 'react';




let datos = [
  { materia:"SQL", nota: 5, etapa: "Primer parcial"},
  { materia:"Programacion", nota:8, etapa: "Primer parcial"},
  { materia:"Matematicas", nota: 6, etapa: "Recuperatorio"}
]
const DashboardAlumno = () => {
  return (
    <>
    <hr></hr>
     <div>
      <h2>DASHBOARD ALUMNO</h2>
      
    </div>
      <br></br>
      
      <br></br> <br></br>


      <div className="container item">

        <table class="table table-striped">
          <thead>
            <tr>
             
              <th scope="col">Materia</th>
              <th scope="col">Nota</th>
              <th scope="col">Etapa</th>
             

            </tr>
          </thead>
          {datos.map(datos => (
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
        