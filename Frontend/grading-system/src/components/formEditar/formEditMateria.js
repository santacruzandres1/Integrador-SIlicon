import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, } from 'react';

const FormEditMateria = () => {

    const navigate = useNavigate();
    const p = useParams();

    const [item, setItem] = useState({
        nombre: "",
        id_usuario: "",
        id_curso: ""
        
        
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
        
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8080/api/materia/${p.id_materia}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Elemento actualizado con éxito');
                    navigate("/dashboard#materias")

                } else {
                    console.error('Error al actualizar el elemento');
                }
            })
            .catch((error) => {
                console.error('Error de red:', error);
            });
    };


    return (
        <>
            <div className='container text-center'>
                <h4>Editar Materia</h4>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">

                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="materia"><h4>Materia</h4></label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    className="form-control"
                                    value={item.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="id_usuario"><h4>ID Profesor</h4></label>
                                <input
                                    type="number"
                                    id="id_usuario"
                                    name='id_usuario'
                                    className="form-control"
                                    value={item.id_usuario}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="id_curso"><h4>ID Curso</h4></label>
                                <input
                                    type="number"
                                    id="id_curso"
                                    name='id_curso'
                                    className="form-control"
                                    value={item.id_curso}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Editar</button>
                        </form>
                    </div>
                </div>
            </div></>
    );
};

export default FormEditMateria;
