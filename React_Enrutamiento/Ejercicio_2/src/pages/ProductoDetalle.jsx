import { useParams } from "react-router-dom";
import productos from "../data";

function ProductoDetalle() {
  const { id } = useParams();

  const producto = productos.find(p => p.id === Number(id));

  if (!producto) return <h2>Producto no encontrado</h2>;

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
    </div>
  );
}

export default ProductoDetalle;