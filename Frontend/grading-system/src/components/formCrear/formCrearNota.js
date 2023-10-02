import React, { useState, } from 'react';




const FormCrearNota = () => {

  const [Alumno, setAlumno] = useState('');
  const [etapa, setEtapa] = useState('');
  const [Nota, setNota] = useState('');
  const [materia, setmateria] = useState('');


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
                <label htmlFor="Alumno"><h4>Alumno</h4></label>
                <input
                  type="text"
                  id="Alumno"
                  className="form-control"
                  value={Alumno}
                  onChange={(e) => setAlumno(e.target.value)}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="materia"><h4>Materia</h4></label>
                <input
                  type="text"
                  id="materia"
                  name='materia'
                  className="form-control"
                  value={materia}
                  onChange={(e) => setmateria(e.target.value)}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="Nota"><h4>Nota</h4></label>
                <input
                  type="Nota"
                  id="Nota"
                  name='Nota'
                  className="form-control"
                  value={Nota}
                  onChange={(e) => setNota(e.target.value)}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="etapa"><h4>Etapa</h4></label>
                <input

                  type="text"
                  id="etapa"
                  className="form-control"
                  value={etapa}
                  onChange={(e) => setEtapa(e.target.value)}
                  required
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