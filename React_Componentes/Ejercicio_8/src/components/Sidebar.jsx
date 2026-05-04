function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Asset <span>Management</span></h2>

      <ul>
        <li className="active">📊 Dashboard</li>
        <li>💻 Hardware</li>
        <li>🧩 Software</li>
        <li>📄 Issued Licenses</li>
        <li>
          📩 Requests <span className="badge">10 New</span>
        </li>
        <li>ℹ️ About</li>
      </ul>
    </div>
  );
}

export default Sidebar;