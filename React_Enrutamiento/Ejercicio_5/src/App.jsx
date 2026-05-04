import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";

function App() {
  return (
    <BrowserRouter>

      {/* NAV */}
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/productos">Productos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:codigo" element={<ProductoDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;