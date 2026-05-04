import { useParams, Link } from "react-router-dom";
import usuarios from "../data/usuarios";

function UsuarioDetalle() {
  const { id } = useParams();

  const usuario = usuarios.find(u => u.id === Number(id));

  if (!usuario) return <h2>Usuario no encontrado</h2>;

  return (
    <div>
      <h1>{usuario.nombre}</h1>
      <p>Correo: {usuario.correo}</p>

      <br />
      <Link to="/usuarios">← Volver</Link>
    </div>
  );
}

export default UsuarioDetalle;