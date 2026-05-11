import { useEffect, useState } from "react";
import axios from "axios";

function Chiste() {

  const [chiste, setChiste] = useState("");

  // FUNCIÓN PARA OBTENER CHISTE
  const obtenerChiste = async () => {
    try {

      const respuesta = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );

      setChiste(respuesta.data.value);

    } catch (error) {
      console.log("Error:", error);
    }
  };

  // CARGA INICIAL
  useEffect(() => {
    obtenerChiste();
  }, []);

  return (
    <div className="contenedor">

      <h1>Chistes de Chuck Norris</h1>

      <p>{chiste}</p>

      <button onClick={obtenerChiste}>
        Otro chiste
      </button>

    </div>
  );
}

export default Chiste;