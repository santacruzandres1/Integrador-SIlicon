

import React, { useState, } from 'react';




const FormEditCurso = () => {

    const [Id, setId] = useState('');
    const [Nombre, setNombre] = useState('');
   


    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <>
            <div className='container'><h2>Editar Curso
            </h2></div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="Id"><h4>Id</h4></label>
                                <input
                                    type="text"
                                    id="Id"
                                    className="form-control"
                                    value={Id}
                                    onChange={(e) => setId(e.target.value)}
                                    required
                                />
                            </div>
                            <br></br>

  
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

                           



                            <button type="submit" className="btn btn-primary">Editar</button>
                        </form>
                    </div>
                </div>
            </div></>
    );
};

export default FormEditCurso
