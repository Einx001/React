import { useEffect, useState } from "react";
import axios from "axios";

function TablaPersonajes() {

  const [personajes, setPersonajes] = useState([]);

  // OBTENER PERSONAJES
  const obtenerPersonajes = async () => {

    try {

      const respuesta = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      setPersonajes(respuesta.data.results);

    } catch (error) {
      console.log(error);
    }
  };

  // CARGA INICIAL
  useEffect(() => {
    obtenerPersonajes();
  }, []);

  return (
    <div className="contenedor">

      <h1>Tabla de Personajes</h1>

      <table>

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Origen</th>
            <th>Ubicación</th>
          </tr>
        </thead>

        <tbody>

          {personajes.map((personaje) => (

            <tr key={personaje.id}>

              <td>{personaje.name}</td>

              <td>{personaje.species}</td>

              <td>
                {personaje.origin.name}
              </td>

              <td>
                {personaje.location.name}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TablaPersonajes;