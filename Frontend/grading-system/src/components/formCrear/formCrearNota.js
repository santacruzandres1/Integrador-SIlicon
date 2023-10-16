import React, { useState, } from 'react';


import React, { useState, } from 'react';


const FormCrearMateria = () => {


const [data, setData] = useState({
    nombre: "",
    id_usuario: "",
    id_curso: ""
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
        fetch("http://localhost:8080/api/materia",
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
        alert('Usuario creado con exito');
        window.location.reload();
      
     
        
      })
      .catch((error) => console.error("Error al crear el usuario: ", error));
  }
  


    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit}>
                              <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingMateria"
                    value={data.nombre}
                    placeholder='Materia'
                    onChange={handleInputChange}
                    name='nombre'
                    required
                  />
                                <label htmlFor="floatingMateria" ><h4>Materia</h4></label>
                            </div>
                            <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingId"
                    placeholder='ID Profesor'
                    value={data.id_usuario}
                    name='id_usuario'
                    onChange={handleInputChange}
                    required
                  />

                                <label htmlFor="floatingId"><h4>ID Profesor</h4></label>
                            </div>
                            <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingIdCurso"
                    placeholder='ID Curso'
                    value={data.id_curso}
                    name='id_curso'
                    onChange={handleInputChange}
                    required
                  />

                             <label htmlFor="floatingIdCurso"><h4>ID Curso</h4></label>
                            </div>
                            <button type="submit" className="btn btn-primary">Crear</button>
                        </form>
                    </div>
                </div>
            </div></>
    );
};

export default FormCrearMateria


const FormCrearNota = () => {

  const [id_usuario, setId_user] = useState('');
  const [periodo_1, setPeriodo_1] = useState('');
  const [periodo_2, setPeriodo_2] = useState('');
  const [periodo_3, setPeriodo_3] = useState('');
  const [id_materia, setIdMateria] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <br></br>
            <div className='container text-center'><h2>Crear Nota</h2></div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="id_usuario"><h4>Id Alumno</h4></label>
                <input
                  type="number"
                  id="id_usuario"
                  className="form-control"
                  value={id_usuario}
                  onChange={(e) => setId_user(e.target.value)}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="id_materia"><h4>Id Materia</h4></label>
                <input
                  type="number"
                  id="id_materia"
                  name='id_materia'
                  className="form-control"
                  value={id_materia}
                  onChange={(e) => setIdMateria(e.target.value)}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="periodo_1"><h4>Periodo 1</h4></label>
                <input
                  type="number"
                  id="periodo_1"
                  name='califiperiodo_1'
                  className="form-control"
                  value={periodo_1}
                  onChange={(e) => setPeriodo_1(e.target.value)}
                
                />
              </div>
              <br></br> 

              <div className="form-group">
                <label htmlFor="periodo_2"><h4>Periodo 2</h4></label>
                <input

                  type="number"
                  id="periodo_2"
                  className="form-control"
                  value={periodo_2}
                  onChange={(e) => setPeriodo_2(e.target.value)}
                 
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="periodo_3"><h4>Periodo 3</h4></label>
                <input

                  type="number"
                  id="periodo_3"
                  className="form-control"
                  value={periodo_3}
                  onChange={(e) => setPeriodo_3(e.target.value)}
                 
                />
              </div>
              <br></br>

              <button type="submit" className="btn btn-primary">Crear</button>
            </form>
          </div>
        </div>
      </div></>
  );
};

export default FormCrearNota      