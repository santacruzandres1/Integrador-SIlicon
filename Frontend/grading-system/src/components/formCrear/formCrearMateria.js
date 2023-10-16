import React, { useState, } from 'react';


const FormCrearMateria = () => {

const [data, setData] = useState({
    nombre: "",
    id_usuario: "",
    id_curso: ""
});


const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/materia",
     {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => 
        
          {
        
            response.json()
          }
          
          )

      .then((data) => {
        console.log("Usuario creado:", data);
        alert('Usuario creado con exito');
      
     
        
      })
      .catch((error) => console.error("Error al crear el usuario: ", error));
  }
  


    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit}>
                              <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingMateria"
                                    value={data.MATERIA}
                                    placeholder='Materia'
                                    onChange={handleInputChange}
                                    name='nombre'
                                    required
                                />
                                <label htmlFor="floatingMateria" ><h4>Materia</h4></label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="floatingId"
                                    placeholder='id_usuario'
                                    value={data.id_usuario}
                                    name='id_usuario'
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor="floatingId"><h4>ID Profesor</h4></label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="floatingIdCurso"
                                    placeholder='id_curso'
                                    value={data.id_curso}
                                    name='id_curso'
                                    onChange={handleInputChange}
                                    required
                                />
                             <label htmlFor="floatingIdCurso"><h4>ID Curso</h4></label>
                            </div>
                            <button type="submit" className="btn btn-primary">Crear</button>
                        </form>
                    </div>
                </div>
            </div></>
    );
};

export default FormCrearMateria
