import { useState } from "react";
import axios from "axios";

function FiltroPersonajes() {

  const [estado, setEstado] = useState("");
  const [genero, setGenero] = useState("");

  const [personajes, setPersonajes] = useState([]);

  // BUSCAR PERSONAJES
  const buscarPersonajes = async () => {

    try {

      const respuesta = await axios.get(
        `https://rickandmortyapi.com/api/character/?status=${estado}&gender=${genero}`
      );

      setPersonajes(respuesta.data.results);

    } catch (error) {

      console.log(error);

      setPersonajes([]);
    }
  };

  return (
    <div className="contenedor">

      <h1>Filtros de Personajes</h1>

      {/* FILTROS */}
      <div className="filtros">

        {/* ESTADO */}
        <select
          value={estado}
          onChange={(e) =>
            setEstado(e.target.value)
          }
        >

          <option value="">
            Seleccionar Estado
          </option>

          <option value="alive">
            Alive
          </option>

          <option value="dead">
            Dead
          </option>

          <option value="unknown">
            Unknown
          </option>

        </select>

        {/* GÉNERO */}
        <select
          value={genero}
          onChange={(e) =>
            setGenero(e.target.value)
          }
        >

          <option value="">
            Seleccionar Género
          </option>

          <option value="male">
            Male
          </option>

          <option value="female">
            Female
          </option>

          <option value="genderless">
            Genderless
          </option>

          <option value="unknown">
            Unknown
          </option>

        </select>

        {/* BOTÓN */}
        <button onClick={buscarPersonajes}>
          Buscar
        </button>

      </div>

      {/* RESULTADOS */}
      <div className="grid">

        {personajes.map((personaje) => (

          <div
            key={personaje.id}
            className="card"
          >

            <img
              src={personaje.image}
              alt={personaje.name}
            />

            <h3>{personaje.name}</h3>

            <p>
              Estado:
              {" "}
              {personaje.status}
            </p>

            <p>
              Género:
              {" "}
              {personaje.gender}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FiltroPersonajes;