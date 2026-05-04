import { useParams, useSearchParams, Link } from "react-router-dom";
import ciudades from "../data/ciudades";

function CiudadDetalle() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const modo = searchParams.get("modo"); // ← query param

  const ciudad = ciudades.find(c => c.id === Number(id));

  if (!ciudad) return <h2>Ciudad no encontrada</h2>;

  return (
    <div>
      <h1>{ciudad.nombre}</h1>

      {/* lógica del modo */}
      {modo !== "compacto" && (
        <p>Población: {ciudad.poblacion}</p>
      )}

      <br />

      {/* navegación para probar */}
      <Link to={`/ciudades/${ciudad.id}`}>Modo normal</Link>
      <br />
      <Link to={`/ciudades/${ciudad.id}?modo=compacto`}>
        Modo compacto
      </Link>
    </div>
  );
}

export default CiudadDetalle;