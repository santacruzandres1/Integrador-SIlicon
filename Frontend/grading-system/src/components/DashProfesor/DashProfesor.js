import React from 'react';




let datos = [
    { alumno:"raul", materia:"sql", nota:5, etapa:"primer parcial"},
    { alumno:"javier", materia:"sql", nota:8, etapa:"primer parcial"},
]
const DashProfesor = () => {
    return (

        <>
        <hr></hr>
        
         <div>
            <h2>DASHBOARD PROFESOR </h2>
            <br></br>
        </div>
            <br></br>
            <div className="container ">
                <div class="row ">
                    <div class="col-4">
                        <button className="btn btn-dark  ">Agregar Nota</button>
                    </div>
                    <div class="col-4">
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Materia</label>
                            <select class="form-select" id="inputGroupSelect01">
                               
                                <option value="1">sql</option>
                                <option value="2">programcion</option>
                                <option value="3">ingles</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-4 "><div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar Alumno" aria-label="Search"></input>
                            <button className="btn btn-dark" type="submit">Buscar</button>
                        </form>
                    </div></div>

                </div>




            </div>
            <br></br> <br></br>


            <div className="container item">

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Alumno</th>
                            <th scope="col">Materia</th>
                            <th scope="col">Nota</th>
                            <th scope="col">Etapa</th>


                        </tr>
                    </thead>
                    {datos.map(datos => (
                        <tbody>
                            <tr >

                                <td>{datos.alumno}</td>
                                <td>{datos.materia}</td>
                                <td>{datos.nota}</td>
                                <td>{datos.etapa}</td>

                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-dark">Editar</button>

                                    <button type="button" class="btn btn-dark">Borrar</button>
                                </div>
                            </tr>

                        </tbody>))}
                </table>

                <br></br>




            </div>







        </>
    );
}



export default DashProfesor;