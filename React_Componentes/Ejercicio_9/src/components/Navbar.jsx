function Navbar() {
  const items = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];

  return (
    <nav className="navbar">
      {items.map((item) => (
        <a key={item} href="#">{item}</a>
      ))}
    </nav>
  );
}

export default Navbar;