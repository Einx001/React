import { useState } from "react";
import axios from "axios";

function CoctelRandom() {

  const [coctel, setCoctel] = useState(null);

  // OBTENER CÓCTEL RANDOM
  const obtenerCoctel = async () => {

    try {

      const respuesta = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );

      setCoctel(respuesta.data.drinks[0]);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contenedor">

      <h1>Cóctel Sorpresa</h1>

      {/* BOTÓN */}
      <button onClick={obtenerCoctel}>
        Sorpresa
      </button>

      {/* RESULTADO */}
      {coctel && (

        <div className="card">

          <h2>{coctel.strDrink}</h2>

          <img
            src={coctel.strDrinkThumb}
            alt={coctel.strDrink}
          />

          <p>
            {coctel.strInstructions}
          </p>

          <p>
            <strong>Categoría:</strong>
            {" "}
            {coctel.strCategory}
          </p>

        </div>

      )}

    </div>
  );
}

export default CoctelRandom;