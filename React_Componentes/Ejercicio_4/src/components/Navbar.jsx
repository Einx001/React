function Navbar() {
  const regions = ["Africa", "Australia", "South America"];

  return (
    <nav className="menu">
      {regions.map((region, index) => (
        <span key={region}>
          <a
            href="#"
            className={region === "South America" ? "active" : ""}
          >
            {region}
          </a>
          {index < regions.length - 1 && <span className="separator">|</span>}
        </span>
      ))}
    </nav>
  );
}

export default Navbar;