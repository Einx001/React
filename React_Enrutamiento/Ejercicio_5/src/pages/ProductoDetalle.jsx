import { useParams, Link } from "react-router-dom";
import productos from "../data/productos";

function ProductoDetalle() {
  const { codigo } = useParams();

  const producto = productos.find(p => p.codigo === codigo);

  if (!producto) return <h2>Producto no encontrado</h2>;

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p><strong>Código:</strong> {producto.codigo}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p>{producto.descripcion}</p>

      <br />
      <Link to="/productos">← Volver al catálogo</Link>
    </div>
  );
}

export default ProductoDetalle;