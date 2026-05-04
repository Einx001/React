import StatCard from './StatCard';
import ChartCard from './ChartCard';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stats">
        <StatCard number="15" label="Requests Proc.." color="#a084ca" />
        <StatCard number="30" label="Licenses Issued" color="#5ec7a7" />
      </div>

      <ChartCard />
    </div>
  );
}

export default Dashboard;