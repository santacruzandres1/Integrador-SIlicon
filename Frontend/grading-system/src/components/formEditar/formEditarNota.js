import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const FormEditarNota = () => {
const navigate = useNavigate()

const {id_materia,id_usuario}=useParams();
debugger
  const [item, setItem] = useState({
    id_materia:null,
    id_usuario:null,
    periodo_1:null,
    periodo_2:null,
    periodo_3:null
  });
//  const id_materia = data.id_materia
//  const id_usuario = data.id_usuario

  // useEffect(() => {
  //   if (data) {
  //     setItem({
    
  //      periodo_1:data.periodo_1 || null,
  //      periodo_2: data.periodo_2 || null,
  //      periodo_3:data.periodo_3 || null,
  //     });
  //     }
  // }, [data]);


  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setItem({ ...item, [name]: value });
      
  };
  debugger
  const handleSubmit = (e) => {
      e.preventDefault();

      fetch(`http://localhost:8080/api/nota/${id_materia}/${id_usuario}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'authorization': sessionStorage.getItem('token')
          },
          body: JSON.stringify(item),
      })
          .then((response) => {
              if (response.ok) {
                  console.log('Elemento actualizado con éxito');
               navigate('/dashboard')
                 

              } else {
                  console.error('Error al actualizar el elemento');
              }
          })
          .catch((error) => {
              console.error('Error de red:', error);
          });
  };
debugger


  return (
    <>
            <div className='container text-center'><h2>Editar Nota</h2></div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <form onSubmit={handleSubmit}>
              

              <div className="form-group">
                <label htmlFor="periodo_1"><h4>Periodo 1</h4></label>
                <input
                  type="number"
                  id="periodo_1"
                  name='periodo_1'
                  className="form-control"
                  value={item.periodo_1}
                  onChange={handleInputChange}
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="periodo_2"><h4>Periodo 2</h4></label>
                <input
                  name='periodo_2'
                  type="number"
                  id="periodo_2"
                  className="form-control"
                  value={item.periodo_2}
                  onChange={handleInputChange}
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="periodo_3"><h4>Periodo 3</h4></label>
                <input

                  type="number"
                  id="periodo_3"
                  name="periodo_3"
                  className="form-control"
                  value={item.periodo_3}
                  onChange={handleInputChange}
                  
                />
              </div>
              <button className="btn btn-primary">Editar</button> 
            </form>
  
          </div>
        </div>
      </div></>
  );
};

export default FormEditarNota      