import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DetallePersonaje() {

  const { id } = useParams();

  const [personaje, setPersonaje] = useState(null);

  // OBTENER DETALLE
  const obtenerDetalle = async () => {

    try {

      const respuesta = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      setPersonaje(respuesta.data);

    } catch (error) {
      console.log(error);
    }
  };

  // CARGA INICIAL
  useEffect(() => {
    obtenerDetalle();
  }, []);

  // CARGANDO
  if (!personaje) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div className="detalle">

      <h1>{personaje.name}</h1>

      <img
        src={personaje.image}
        alt={personaje.name}
      />

      <p>
        <strong>Estado:</strong>
        {" "}
        {personaje.status}
      </p>

      <p>
        <strong>Especie:</strong>
        {" "}
        {personaje.species}
      </p>

      <p>
        <strong>Género:</strong>
        {" "}
        {personaje.gender}
      </p>

      <p>
        <strong>Origen:</strong>
        {" "}
        {personaje.origin.name}
      </p>

      <p>
        <strong>Ubicación:</strong>
        {" "}
        {personaje.location.name}
      </p>

      <Link to="/">
        Volver
      </Link>

    </div>
  );
}

export default DetallePersonaje;