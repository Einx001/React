import { Link } from "react-router-dom";
import usuarios from "../data/usuarios";

function Usuarios() {
  return (
    <div>
      <h1>Lista de Usuarios</h1>

      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>
            <Link to={`/usuarios/${user.id}`}>
              {user.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;