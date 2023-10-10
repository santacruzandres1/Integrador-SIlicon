import React, { useState, } from 'react';




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