function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Material Blog</div>

      <div className="nav-links">
        <span>🔐 Login</span>
        <span>🏠 Home</span>
        <span>📊 Dashboard</span>
        <span>🚪 LogOut</span>
      </div>
    </div>
  );
}

export default Navbar;