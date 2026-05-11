import { useState } from "react";
import axios from "axios";

function PersonajeAleatorio() {

  const [personaje, setPersonaje] = useState(null);

  // OBTENER PERSONAJE ALEATORIO
  const obtenerPersonaje = async () => {

    try {

      // 1. OBTENER TOTAL
      const totalRespuesta = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      const total =
        totalRespuesta.data.info.count;

      // 2. GENERAR ID ALEATORIO
      const idAleatorio =
        Math.floor(Math.random() * total) + 1;

      // 3. OBTENER PERSONAJE
      const personajeRespuesta =
        await axios.get(
          `https://rickandmortyapi.com/api/character/${idAleatorio}`
        );

      setPersonaje(personajeRespuesta.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contenedor">

      <h1>Personaje Aleatorio</h1>

      {/* BOTÓN */}
      <button onClick={obtenerPersonaje}>
        Mostrar Personaje
      </button>

      {/* PERSONAJE */}
      {personaje && (

        <div className="card">

          <img
            src={personaje.image}
            alt={personaje.name}
          />

          <h2>{personaje.name}</h2>

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

        </div>

      )}

    </div>
  );
}

export default PersonajeAleatorio;