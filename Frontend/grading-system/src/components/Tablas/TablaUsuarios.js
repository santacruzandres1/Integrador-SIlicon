import { useFetch } from "../../useFetch";

const TablaUsuarios = () => {
  const { data } = useFetch("http://localhost:3000/api/usuarios");
  console.log(data);
  return (
<div className="container item">

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre y Apellido</th>
      <th scope="col">Email</th>
      <th scope="col">Rol</th>

    </tr>
  </thead>
  {data?.map((USUARIO) => (
    <tbody>
      <tr >
        <th scope="row">{USUARIO.id_usuario}</th>
        <td>{USUARIO.nickname}</td>
        <td>{USUARIO.email}</td>
        <td>{USUARIO.id_rol}</td>
        
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-dark">Editar</button>

          <button type="button" class="btn btn-dark">Borrar</button>
        </div>
      </tr>

    </tbody>))}
</table>
</div>
  );
}

export default TablaUsuarios;