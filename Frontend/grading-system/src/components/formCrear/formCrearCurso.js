import React, { useState, } from 'react';




const FormCrearCurso = () => {

  
    const [curso, setCurso] = useState({
        nombre:""
    });   

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurso({
          ...curso,
          [name]: value,
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/curso",
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(curso),
          })
            .then((response) => 
              
                {
              
                  response.json()
                }
                
                )
      
            .then((data) => {
              console.log("Curso creado:", data);
              alert('Curso creado con exito');
              window.location.reload();
           
              
            })
            .catch((error) => console.error("Error al crear el curso: ", error));

    };


    return (
        <>
            <div className='container text-center'>
                <h2>Crear Curso</h2>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit}>
                            

  
                              <div className="form-group">
                                <label htmlFor="nombre"><h4>Nombre</h4></label>
                                <input
                                   
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    className="form-control"
                                    value={curso.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
        

                           



                            <button type="submit" className="btn btn-primary">Crear</button>
                        </form>
                    </div>
                </div>
            </div></>
    );
};

export default FormCrearCurso
