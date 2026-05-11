import { useState } from "react";
import axios from "axios";

function Ingredientes() {

  const [ingrediente, setIngrediente] = useState("");
  const [cocteles, setCocteles] = useState([]);

  // BUSCAR CÓCTELES
  const buscarCocteles = async () => {

    if (ingrediente.trim() === "") return;

    try {

      const respuesta = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`
      );

      setCocteles(respuesta.data.drinks || []);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contenedor">

      <h1>Buscar Cócteles por Ingrediente</h1>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Ej: Gin"
        value={ingrediente}
        onChange={(e) =>
          setIngrediente(e.target.value)
        }
      />

      {/* BOTÓN */}
      <button onClick={buscarCocteles}>
        Buscar
      </button>

      {/* RESULTADOS */}
      <div className="grid">

        {cocteles.map((drink) => (

          <div
            key={drink.idDrink}
            className="card"
          >

            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />

            <h3>{drink.strDrink}</h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Ingredientes;