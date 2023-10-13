

import React, { useState, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';



const FormEditCurso = () => {

    const navigate = useNavigate();
    const p = useParams();

    const [item, setItem] = useState({
        nombre: ""
        
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
        
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/api/curso/${p.id_curso}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Elemento actualizado con éxito');
                    navigate("/dashboard")
                    

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
                <h4>Editar Curso</h4>
                </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit}>
                           

  
                              <div className="form-group">
                                <label htmlFor="Nombre"><h4>Nombre</h4></label>
                                <input
                                    type="text"
                                    id="Nombre"
                                    name="nombre"
                                    className="form-control"
                                    value={item.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
            
                            <button type="submit" className="btn btn-primary">Editar</button>
                        </form>
                    </div>
                </div>
            </div>
            </>
    );
};

export default FormEditCurso
