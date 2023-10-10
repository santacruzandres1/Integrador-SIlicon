import React, { useState, } from 'react';




const FormEditMateria = () => {

    const [nombre, setNombre] = useState('');
    const [id_usuario, setid_usuario] = useState('');
    const [id_curso, setid_curso] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <>
            <br></br>
            <div className='container text-center'><h2>Editar Materia
            </h2></div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit}>







                            <div className="form-group">
                                <label htmlFor="nombre"><h4>Nombre</h4></label>
                                <input
                                    type="text"
                                    id="nombre"
                                    className="form-control"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>
                            <br></br>

                            <div className="form-group">
                                <label htmlFor="id_usuario"><h4>ID Profesor</h4></label>
                                <input
                                    type="number"
                                    id="id_usuario"
                                    name='id_usuario'
                                    className="form-control"
                                    value={id_usuario}
                                    onChange={(e) => setid_usuario(e.target.value)}
                                    required
                                />
                            </div>
                            <br></br>

                            <div className="form-group">
                                <label htmlFor="id_curso"><h4>ID Curso</h4></label>
                                <input
                                    type="number"
                                    id="id_curso"
                                    name='id_curso'
                                    className="form-control"
                                    value={id_curso}
                                    onChange={(e) => setid_curso
                                        (e.target.value)}
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

export default FormEditMateria
