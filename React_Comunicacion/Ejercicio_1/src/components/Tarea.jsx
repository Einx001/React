import { useState } from "react";

function Tarea() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Estudiar React", completada: false },
    { id: 2, texto: "Hacer ejercicio", completada: false },
    { id: 3, texto: "Leer un libro", completada: false }
  ]);

  const toggleTarea = (id) => {
    const nuevasTareas = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );

    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h2>Lista de tareas</h2>

      <ul>
        {tareas.map((t) => (
          <li
            key={t.id}
            className={t.completada ? "completada" : ""}
          >
            <input
              type="checkbox"
              checked={t.completada}
              onChange={() => toggleTarea(t.id)}
            />
            {t.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tarea;