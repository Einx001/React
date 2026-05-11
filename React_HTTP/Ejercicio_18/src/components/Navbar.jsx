import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav>

      <Link to="/personajes">
        Personajes
      </Link>

      <Link to="/episodios">
        Episodios
      </Link>

    </nav>
  );
}

export default Navbar;