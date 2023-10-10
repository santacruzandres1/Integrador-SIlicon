import React, { useState, } from 'react';




const FormEditarNota = () => {

  
    const [periodo_1, setperiodo_1] = useState('');
  const [periodo_2, setPeriodo_2] = useState('');
 
  const [periodo_3, setPeriodo_3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <br></br>
            <div className='container text-center'><h2>Editar Nota</h2></div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <form onSubmit={handleSubmit}>
              

              <div className="form-group">
                <label htmlFor="Nota"><h4>Periodo 1</h4></label>
                <input
                  type="number"
                  id="periodo_1"
                  name='periodo_1'
                  className="form-control"
                  value={periodo_1}
                  onChange={(e) => setperiodo_1(e.target.value)}
                  
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

              <button type="submit" className="btn btn-primary">Editar</button>
              
            </form>
  
          </div>
        </div>
      </div></>
  );
};

export default FormEditarNota      