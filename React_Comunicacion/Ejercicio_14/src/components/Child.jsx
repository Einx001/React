import { useState } from "react";

function Child({ mensajePadre, enviarAlPadre }) {

  // INPUT DEL HIJO
  const [mensajeHijo, setMensajeHijo] = useState("");

  const enviarMensaje = () => {
    enviarAlPadre(mensajeHijo);
  };

  return (
    <div>

      <h1>Child Component</h1>

      <input
        type="text"
        placeholder="Enter a message"
        value={mensajeHijo}
        onChange={(e) =>
          setMensajeHijo(e.target.value)
        }
      />

      <br /><br />

      <button onClick={enviarMensaje}>
        Send Message To Parent
      </button>

      <p>
        Message from parent::
        <strong> {mensajePadre}</strong>
      </p>

    </div>
  );
}

export default Child;