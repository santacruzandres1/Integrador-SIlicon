import React, { useState, } from 'react';



const FormCrearNota = () => {

  const [data , setData] = useState({
    id_usuario: null,
    id_materia: null,
    periodo_1: null,
    periodo_2: null,
    periodo_3: null
  });

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/nota",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'authorization': sessionStorage.getItem('token')
    },
    body: JSON.stringify(data),
  
  })

  .then((response) => 
        
  {

    response.json()
  }
  
  )

.then((data) => {
console.log("Usuario creado:", data);
      alert('Nota creado con exito');
window.location.reload();
    
    

  })
  .catch((error) => console.error("Error al crear el usuario: ", error));
}



  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="id_usuario"><h4>Id Alumno</h4></label>
                <input
                  type="number"
                  id="id_usuario"
                  name='id_usuario'
                  className="form-control"
                  value={data.id_usuario}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="id_materia"><h4>Id Materia</h4></label>
                <input
                  type="number"
                  id="id_materia"
                  name='id_materia'
                  className="form-control"
                  value={data.id_materia}
                  onChange={handleInputChange}
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="periodo_1"><h4>Periodo 1</h4></label>
                <input
                  type="number"
                  id="periodo_1"
                  name='periodo_1'
                  className="form-control"
                  value={data.periodo_1}
                  onChange={handleInputChange}
                
                />
              </div>
              <div className="form-group">
                <label htmlFor="periodo_2"><h4>Periodo 2</h4></label>
                <input

                  type="number"
                  id="periodo_2"
                  name='periodo_2'
                  className="form-control"
                  value={data.periodo_2}
                  onChange={handleInputChange}
                 
                />
              </div>
              <div className="form-group">
                <label htmlFor="periodo_3"><h4>Periodo 3</h4></label>
                <input

                  type="number"
                  id="periodo_3"
                  name='periodo_3'
                  className="form-control"
                  value={data.periodo_3}
                  onChange={handleInputChange}
                 
                />
              </div>
              <button type="submit" className="btn btn-primary">Crear</button>
            </form>
          </div>
        </div>
      </div></>
  );
};

export default FormCrearNota      