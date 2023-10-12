import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';



function EditItem() {

  const navigate = useNavigate();
  const p = useParams();

  const [item, setItem] = useState({
    nombre:"",
    apellido:"",
    email:"",
    password:"",
    dni:null,
    id_rol:null
  }); 

 

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };
  console.log(p.id_usuario)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza una solicitud Fetch para actualizar el elemento en el servidor
    fetch(`http://localhost:3000/api/usuarios/${p.id_usuario}`, {
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

    
     <br></br>
     
            <div className='container text-center'><h2>Editar Usuario</h2></div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <form onSubmit={handleSubmit}>
             
           

              <div className="form-group">
                <label htmlFor="nombre"><h4>Nombre</h4></label>
                <input
                placeholder='nombre'
                  type="text"
                  id="nombre"
                  name='nombre'
                  className="form-control"
                  value={item.nombre}
            onChange={handleInputChange}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="apellido"><h4>Apellido</h4></label>
                <input
                  type="text"
                  id="apellido"
                  name='apellido'
                  className="form-control"
                  value={item.apellido}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="dni"><h4>Dni</h4></label>
                <input
                  type="number"
                  id="dni"
                  name='dni'
                  className="form-control"
                  value={item.dni}
            onChange={handleInputChange}
                  required
                />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="id_rol"><h4>ID Rol</h4></label>
                <input
                  type="number"
                  id="id_rol"
                  name='id_rol'
                  className="form-control"
                  value={item.id_rol}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="email"><h4>Email</h4></label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  className="form-control"
                  value={item.email}
            onChange={handleInputChange}
                  required
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="password"><h4>Password</h4></label>
                <input
                 name='password'
                  type="password"
                  id="password"
                  className="form-control"
                  value={item.password}
            onChange={handleInputChange}
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

export default EditItem;     



//   return (
//     <div>
//       <h1>Editar Elemento</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Nombre:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formValues.name || item.name || ''}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Descripción:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formValues.description || item.description || ''}
//             onChange={handleInputChange}
//           />
//         </div>
//         {/* Agrega más campos de entrada según sea necesario */}
//         <button type="submit">Editar</button>
//       </form>
//     </div>
//   );
// }


