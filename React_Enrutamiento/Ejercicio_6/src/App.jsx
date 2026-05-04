import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CiudadDetalle from "./pages/CiudadDetalle";

function App() {
  return (
    <BrowserRouter>

      {/* NAV */}
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/ciudades/1">Ver Bogotá</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/ciudades/:id" element={<CiudadDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;