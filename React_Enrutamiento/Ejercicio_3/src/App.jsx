import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Productos from "./pages/Productos";



function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/productos">Productos</Link> |{" "}
        <Link to="/productos/tecnologia">Tecnología</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:categoria" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;