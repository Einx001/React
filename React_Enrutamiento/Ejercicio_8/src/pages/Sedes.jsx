import { useParams } from "react-router-dom";
import empresas from "../data/empresas";

function Sedes() {
  const { id } = useParams(); // 👈 viene del padre

  const empresa = empresas.find(e => e.id === Number(id));

  if (!empresa) return <h2>No hay sedes</h2>;

  return (
    <div>
      <h3>Sedes:</h3>

      <ul>
        {empresa.sedes.map((sede, index) => (
          <li key={index}>{sede}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sedes;