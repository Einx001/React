import { useParams, Link, Outlet } from "react-router-dom";
import empresas from "../data/empresas";

function Empresa() {
  const { id } = useParams();

  const empresa = empresas.find(e => e.id === Number(id));

  if (!empresa) return <h2>Empresa no encontrada</h2>;

  return (
    <div>
      <h1>{empresa.nombre}</h1>

      {/* navegación a subruta */}
      <Link to="sedes">Ver sedes</Link>

      <hr />

      {/* AQUÍ se renderiza el hijo */}
      <Outlet />
    </div>
  );
}

export default Empresa;