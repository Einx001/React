import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Vehiculos from "./pages/Vehiculos";
import VehiculoDetalle from "./pages/VehiculoDetalle";

function App() {
  return (
    <BrowserRouter>

      {/* NAV */}
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/vehiculos">Vehículos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="/vehiculos/:placa" element={<VehiculoDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;