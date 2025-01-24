import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
if (typeof window !== 'undefined') {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
}

function Stats() {
  const [chartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Donations (₹)',
        data: [5000, 7500, 6000, 8000, 9500, 11000],
        fill: false,
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.1
      }
    ]
  });

  const [chartOptions] = useState({
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Donation Trends'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Impact Statistics</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-600 mb-2">Total Donations</h3>
          <p className="text-3xl font-bold">₹47,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-600 mb-2">Causes Supported</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-600 mb-2">Donation Streak</h3>
          <p className="text-3xl font-bold">15 days</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-600 mb-2">Impact Score</h3>
          <p className="text-3xl font-bold">850</p>
        </div>
      </div>

      {/* Donation Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        {typeof window !== 'undefined' && (
          <Line options={chartOptions} data={chartData} />
        )}
      </div>

      {/* Impact Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Donation by Category</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Education</span>
                <span>40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Healthcare</span>
                <span>30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Environment</span>
                <span>30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Recent Milestones</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <p>Reached ₹45,000 in total donations</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <p>Completed 15-day donation streak</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <p>Supported 10+ different causes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;