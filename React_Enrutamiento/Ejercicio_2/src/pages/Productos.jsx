import { Link } from "react-router-dom";
import productos from "../data";

function Productos() {
  return (
    <div>
      <h1>Productos</h1>

      <ul>
        {productos.map((prod) => (
          <li key={prod.id}>
            <Link to={`/productos/${prod.id}`}>
              {prod.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;