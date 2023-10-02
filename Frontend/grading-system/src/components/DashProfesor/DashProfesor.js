import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormCrearNota from '../formCrear/formCrearNota';
import FormEditarNota from '../formEditar/formEditarNota';



let datos = [
    { alumno: "raul", materia: "sql", nota: 5, etapa: "primer parcial" },
    { alumno: "javier", materia: "sql", nota: 8, etapa: "primer parcial" },
]
const DashProfesor = () => {

    const [showModalCrear, setShowModalCrear] = useState(false);
    const handleCloseCrear = () => setShowModalCrear(false);
    const handleShowCrear = () => setShowModalCrear(true);
  
    const [showModalEdit, setShowModalEdit] = useState(false);
    const handleCloseEdit = () => setShowModalEdit(false);
    const handleShowEdit = () => setShowModalEdit(true);
  
    const [showModalDel, setShowModalDel] = useState(false);
  const handleCloseDel = () => setShowModalDel(false);
  const handleShowDel = () => setShowModalDel(true);



    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = datos.filter((item) =>
        item.alumno[0].toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        <button onClick={handleShowCrear} className="btn btn-dark  ">Agregar Nota</button>
                    </div>

                    <div class="col-4 "><div className="container-fluid">
                        <form className="d-flex" role="search">

                            <input className="form-control me-2"
                                type="text"
                                placeholder="Buscar por Alumno"

                                onChange={handleSearch}
                                value={searchTerm}
                            />
                            <button className="btn btn-dark" type="submit">Buscar</button>
                        </form>
                    </div></div>

                </div>

                <Modal show={showModalCrear} onHide={handleCloseCrear}>

<Modal.Body>
  <FormCrearNota></FormCrearNota>

</Modal.Body>
<Modal.Footer>
  <Button  variant="secondary" onClick={handleCloseCrear}>
    Cerrar
  </Button>

</Modal.Footer>
</Modal>
<Modal show={showModalEdit} onHide={handleCloseEdit}>

<Modal.Body>

  <FormEditarNota></FormEditarNota>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleCloseEdit}>
    Cerrar
  </Button>

</Modal.Footer>
</Modal>
<Modal show={showModalDel} onHide={handleCloseDel}>

<Modal.Body >

  <div className='container  text-center '>
    <br></br>
    <strong>¿Está seguro que desea eliminar esta nota?</strong><br></br><br></br>
    <div className='row  '>
      <div className='col'> <button className="btn btn-danger">Eliminar</button></div>
      <div className='col offset-1'> <Button className="btn btn-dark" variant="secondary" onClick={handleCloseDel}>
        Cancelar
      </Button></div>
    </div>




  </div>

</Modal.Body>
</Modal>

            </div>
            <br></br> <br></br>


            <div className="container item">

                <table class="table table-striped-columns">
                    <thead>
                        <tr>
                            <th scope="col">Alumno</th>
                            <th scope="col">Materia</th>
                            <th scope="col">Nota</th>
                            <th scope="col">Etapa</th>


                        </tr>
                    </thead>
                    {filteredData.map(datos => (
                        <tbody>
                            <tr >

                                <td>{datos.alumno}</td>
                                <td>{datos.materia}</td>
                                <td>{datos.nota}</td>
                                <td>{datos.etapa}</td>

                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button onClick={handleShowEdit} type="button" class="btn btn-dark">Editar</button>

                                    <button onClick={handleShowDel} type="button" class="btn btn-dark">Borrar</button>
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