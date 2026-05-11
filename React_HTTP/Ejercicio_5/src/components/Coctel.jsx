import { useState } from "react";
import axios from "axios";

function Coctel() {

  const [busqueda, setBusqueda] = useState("");
  const [coctel, setCoctel] = useState(null);

  // BUSCAR CÓCTEL
  const buscarCoctel = async () => {

    if (busqueda.trim() === "") return;

    try {

      const respuesta = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${busqueda}`
      );

      // TOMAR EL PRIMER RESULTADO
      setCoctel(respuesta.data.drinks[0]);

    } catch (error) {
      console.log(error);
    }
  };

  // OBTENER INGREDIENTES
  const obtenerIngredientes = () => {

    const ingredientes = [];

    if (!coctel) return ingredientes;

    for (let i = 1; i <= 15; i++) {

      const ingrediente =
        coctel[`strIngredient${i}`];

      if (ingrediente) {
        ingredientes.push(ingrediente);
      }
    }

    return ingredientes;
  };

  return (
    <div className="contenedor">

      <h1>Buscar Cóctel</h1>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Ej: margarita"
        value={busqueda}
        onChange={(e) =>
          setBusqueda(e.target.value)
        }
      />

      {/* BOTÓN */}
      <button onClick={buscarCoctel}>
        Buscar
      </button>

      {/* RESULTADO */}
      {coctel && (

        <div className="card">

          {/* NOMBRE */}
          <h2>{coctel.strDrink}</h2>

          {/* IMAGEN */}
          <img
            src={coctel.strDrinkThumb}
            alt={coctel.strDrink}
          />

          {/* INSTRUCCIONES */}
          <p>
            {coctel.strInstructions}
          </p>

          {/* INGREDIENTES */}
          <h3>Ingredientes:</h3>

          <ul>
            {obtenerIngredientes().map((ing, index) => (
              <li key={index}>
                {ing}
              </li>
            ))}
          </ul>

        </div>

      )}

    </div>
  );
}

export default Coctel;