import Dropdown from './Dropdown';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li className="has-dropdown">
          Photos
          <Dropdown />
        </li>
        <li>Videos</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;