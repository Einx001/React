import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetallePersonaje() {

  const { id } = useParams();

  const [personaje, setPersonaje] = useState(null);

  const obtenerDetalle = async () => {

    const respuesta = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    setPersonaje(respuesta.data);
  };

  useEffect(() => {
    obtenerDetalle();
  }, []);

  if (!personaje) return <h2>Cargando...</h2>;

  return (
    <div className="detalle">

      <h1>{personaje.name}</h1>

      <img
        src={personaje.image}
        alt={personaje.name}
      />

      <p>
        Estado: {personaje.status}
      </p>

      <p>
        Especie: {personaje.species}
      </p>

      <p>
        Género: {personaje.gender}
      </p>

    </div>
  );
}

export default DetallePersonaje;