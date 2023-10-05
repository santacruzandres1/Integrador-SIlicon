import React, { useState, } from 'react';




const FormCrearCurso = () => {

  
    const [Nombre, setNombre] = useState('');
   


    const handleSubmit = (e) => {
        e.preventDefault();
    //Fetch

    };


    return (
        <>
        <br></br>
            <div className='container text-center'><h2>Crear Curso
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

                           



                            <button type="submit" className="btn btn-primary">Crear</button>
                        </form>
                    </div>
                </div>
            </div></>
    );
};

export default FormCrearCurso
