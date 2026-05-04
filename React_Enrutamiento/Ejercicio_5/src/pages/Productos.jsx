import { Link } from "react-router-dom";
import productos from "../data/productos";

function Productos() {
  return (
    <div>
      <h1>Catálogo de Productos</h1>

      <ul>
        {productos.map((prod) => (
          <li key={prod.codigo}>
            <Link to={`/productos/${prod.codigo}`}>
              {prod.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;