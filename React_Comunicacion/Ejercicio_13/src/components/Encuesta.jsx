import { useState } from "react";

function Encuesta() {

  const [satisfaccion, setSatisfaccion] = useState("");
  const [recomendaria, setRecomendaria] = useState("");
  const [comentarios, setComentarios] = useState("");

  // ENVIAR
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Satisfacción:", satisfaccion);
    console.log("¿Recomendaría?:", recomendaria);
    console.log("Comentarios:", comentarios);
  };

  // RESET
  const handleReset = () => {
    setSatisfaccion("");
    setRecomendaria("");
    setComentarios("");
  };

  return (
    <div>
      <h1>Encuesta</h1>

      <form onSubmit={handleSubmit}>

        {/* SATISFACCIÓN */}
        <h3>¿Qué tan satisfecho estás?</h3>

        {[1, 2, 3, 4, 5].map((num) => (
          <label key={num}>
            <input
              type="radio"
              name="satisfaccion"
              value={num}
              checked={satisfaccion === String(num)}
              onChange={(e) =>
                setSatisfaccion(e.target.value)
              }
            />
            {num}
          </label>
        ))}

        <br /><br />

        {/* SELECT */}
        <h3>¿Recomendarías este servicio?</h3>

        <select
          value={recomendaria}
          onChange={(e) =>
            setRecomendaria(e.target.value)
          }
        >
          <option value="">Seleccione</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>

        <br /><br />

        {/* COMENTARIOS */}
        <h3>Comentarios adicionales</h3>

        <textarea
          value={comentarios}
          onChange={(e) =>
            setComentarios(e.target.value)
          }
          rows="4"
          cols="40"
        />

        <br /><br />

        {/* BOTONES */}
        <button type="submit">
          Enviar
        </button>

        <button
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>

      </form>
    </div>
  );
}

export default Encuesta;