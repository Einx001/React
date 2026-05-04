import { useParams } from "react-router-dom";
import productos from "../data";

function Productos() {
  const { categoria } = useParams();

  // Si hay categoría → filtra
  const productosFiltrados = categoria
    ? productos.filter(p => p.categoria === categoria)
    : productos;

  return (
    <div>
      <h1>Productos {categoria && `(${categoria})`}</h1>

      <ul>
        {productosFiltrados.map((prod) => (
          <li key={prod.id}>{prod.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;