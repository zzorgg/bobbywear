import { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Users, Eye, ShoppingCart, TrendingUp, Clock, Globe, type LucideIcon } from 'lucide-react';

interface MetricsData {
  totalVisitors: number;
  dailyVisitors: number;
  pageViews: number;
  bounceRate: number;
  avgSessionTime: string;
  conversionRate: number;
}

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change?: string;
  color?: string;
}

type TimeRange = '24h' | '7d' | '30d' | '90d';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function UserMetrics() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const [metricsData] = useState<MetricsData>({
    totalVisitors: 12543,
    dailyVisitors: 342,
    pageViews: 45621,
    bounceRate: 32.5,
    avgSessionTime: '3m 24s',
    conversionRate: 2.8
  });

  // Mock data for charts - replace with real API calls
  const visitorChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Visitors',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const pageViewsData = {
    labels: ['Home', 'Catalog', 'Product Details', 'Contact', 'Checkout'],
    datasets: [
      {
        label: 'Page Views',
        data: [1200, 800, 600, 200, 150],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
      },
    ],
  };

  const deviceData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 205, 86, 0.8)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const StatCard = ({ icon: Icon, title, value, change, color = 'primary' }: StatCardProps) => (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base-content/70 text-sm">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {change && (
              <p className={`text-sm flex items-center gap-1 ${change.startsWith('+') ? 'text-success' : 'text-error'}`}>
                <TrendingUp className="w-4 h-4" />
                {change}
              </p>
            )}
          </div>
          <div className={`p-3 rounded-full bg-${color}/20`}>
            <Icon className={`w-6 h-6 text-${color}`} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-between items-center">
        <div className="tabs tabs-boxed">
          <button
            className={`tab ${timeRange === '24h' ? 'tab-active' : ''}`}
            onClick={() => setTimeRange('24h')}
          >
            24 Hours
          </button>
          <button
            className={`tab ${timeRange === '7d' ? 'tab-active' : ''}`}
            onClick={() => setTimeRange('7d')}
          >
            7 Days
          </button>
          <button
            className={`tab ${timeRange === '30d' ? 'tab-active' : ''}`}
            onClick={() => setTimeRange('30d')}
          >
            30 Days
          </button>
          <button
            className={`tab ${timeRange === '90d' ? 'tab-active' : ''}`}
            onClick={() => setTimeRange('90d')}
          >
            90 Days
          </button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          icon={Users}
          title="Total Visitors"
          value={metricsData.totalVisitors.toLocaleString()}
          change="+12.5%"
          color="primary"
        />
        <StatCard
          icon={Eye}
          title="Daily Visitors"
          value={metricsData.dailyVisitors}
          change="+8.2%"
          color="secondary"
        />
        <StatCard
          icon={Globe}
          title="Page Views"
          value={metricsData.pageViews.toLocaleString()}
          change="+15.7%"
          color="accent"
        />
        <StatCard
          icon={Clock}
          title="Avg Session Time"
          value={metricsData.avgSessionTime}
          change="+5.3%"
          color="info"
        />
        <StatCard
          icon={TrendingUp}
          title="Bounce Rate"
          value={`${metricsData.bounceRate}%`}
          change="-2.1%"
          color="warning"
        />
        <StatCard
          icon={ShoppingCart}
          title="Conversion Rate"
          value={`${metricsData.conversionRate}%`}
          change="+1.4%"
          color="success"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitor Trend Chart */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title">Visitor Trends</h3>
            <div className="h-64">
              <Line data={visitorChartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Device Usage Chart */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title">Device Usage</h3>
            <div className="h-64 flex items-center justify-center">
              <Doughnut data={deviceData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Page Views Chart */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h3 className="card-title">Most Visited Pages</h3>
          <div className="h-64">
            <Bar data={pageViewsData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Real-time Activity */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h3 className="card-title">Real-time Activity</h3>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Page</th>
                  <th>User Location</th>
                  <th>Device</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2 min ago</td>
                  <td>/catalog</td>
                  <td>New York, US</td>
                  <td>Desktop</td>
                </tr>
                <tr>
                  <td>5 min ago</td>
                  <td>/product/123</td>
                  <td>London, UK</td>
                  <td>Mobile</td>
                </tr>
                <tr>
                  <td>8 min ago</td>
                  <td>/</td>
                  <td>Toronto, CA</td>
                  <td>Desktop</td>
                </tr>
                <tr>
                  <td>12 min ago</td>
                  <td>/contact</td>
                  <td>Sydney, AU</td>
                  <td>Tablet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
