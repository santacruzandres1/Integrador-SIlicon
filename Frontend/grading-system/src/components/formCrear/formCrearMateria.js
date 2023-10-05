import React, { useState, } from 'react';




const FormCrearMateria = () => {

   
    const [Nombre, setNombre] = useState('');
    const [Profesor, setProfesor] = useState('');
    const [Curso, setCurso] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <>
          <br></br>
            <div className='container text-center'><h2>Crear Materia
            </h2></div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit}>
                            

  
                              <div className="form-group">
                                <label htmlFor="Nombre"><h4>Nombre</h4></label>
                                <input
                                    type="text"
                                    id="Nombre"
                                    className="form-control"
                                    value={Nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>
                            <br></br>

                            <div className="form-group">
                                <label htmlFor="Profesor"><h4>Profesor</h4></label>
                                <input
                                    type="text"
                                    id="Profesor"
                                    name='Profesor'
                                    className="form-control"
                                    value={Profesor}
                                    onChange={(e) => setProfesor(e.target.value)}
                                    required
                                />
                            </div>
                            <br></br>

                            <div className="form-group">
                                <label htmlFor="Curso"><h4>Curso</h4></label>
                                <input
                                    type="text"
                                    id="Curso"
                                    name='Curso'
                                    className="form-control"
                                    value={Curso}
                                    onChange={(e) => setCurso
                                        (e.target.value)}
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

export default FormCrearMateria
