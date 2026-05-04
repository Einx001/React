import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;