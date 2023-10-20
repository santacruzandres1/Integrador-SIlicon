import React, { useState, } from 'react';



const FormCrearMateria = ({ handleClose }) => {


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
        'authorization': sessionStorage.getItem('token')
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
        alert('Materia creado con exito');
        handleClose();

     
      
     
        
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
                    value={data.nombre}
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
                    placeholder='ID Profesor'
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
                    placeholder='ID Curso'
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
