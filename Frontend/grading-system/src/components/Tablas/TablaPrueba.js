import { useFetch } from "../../useFetch";

const TablaPrueba = () => {
  const { data } = useFetch("http://jsonplaceholder.typicode.com/users");

  return (
    <>
      <h2>Tabla de prueba</h2>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TablaPrueba;
