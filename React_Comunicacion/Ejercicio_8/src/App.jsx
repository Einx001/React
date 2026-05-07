import Producto from "./components/Producto";
import "./App.css";

function App() {
  return (
    <div>
      <Producto
        nombre="Laptop Gamer"
        precio={3500}
        descripcion="Laptop potente para videojuegos"
      />

      <Producto
        nombre="Mouse"
        precio={80}
        descripcion="Mouse inalámbrico"
      />

      <Producto
        nombre="Teclado"
        precio={150}
        descripcion="Teclado mecánico RGB"
      />
    </div>
  );
}

export default App;