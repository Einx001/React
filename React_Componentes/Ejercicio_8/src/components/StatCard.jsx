function StatCard({ number, label, color }) {
  return (
    <div className="stat-card" style={{ background: color }}>
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
}

export default StatCard;