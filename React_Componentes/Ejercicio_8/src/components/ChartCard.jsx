function ChartCard() {
  return (
    <div className="chart-card">
      <h3>Statistics by Hardware Status</h3>

      <div className="fake-chart">
        <div className="circle"></div>
      </div>

      <div className="legend">
        <span>● Assigned</span>
        <span>● In-repair</span>
        <span>● Ordered</span>
        <span>● Pending</span>
      </div>
    </div>
  );
}

export default ChartCard;