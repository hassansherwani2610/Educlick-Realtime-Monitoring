import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Stores aggregated click metrics from backend
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetches latest engagement summary from backend API
    const fetchMetrics = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/metrics/click-summary");
        setData(response.data); // Updates chart data with latest metrics
      } catch (error) {
        console.error(error); // Logs error if API call fails
      }
    };

    fetchMetrics();

    // Poll backend every 5 seconds to simulate live dashboard updates
    const interval = setInterval(fetchMetrics, 5000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-purple-200 mb-6 text-center">
        Course Engagement Dashboard
      </h2>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg shadow-purple-900/40">
        <ResponsiveContainer width="100%" height={400}>
          {/* Renders bar chart comparing BUY vs ENROLL actions per course */}
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="course" stroke="#ddd" />
            <YAxis stroke="#ddd" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1b4b",
                border: "none",
                color: "#fff",
              }}
            />
            <Legend wrapperStyle={{ color: "#ddd" }} />
            {/* BUY action count visualization */}
            <Bar dataKey="BUY" fill="#facc15" radius={[6, 6, 0, 0]} />
            {/* ENROLL action count visualization */}
            <Bar dataKey="ENROLL" fill="#7c3aed" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div
        className="mt-8 max-w-5xl mx-auto rounded-xl border border-red-500/30 
                bg-gradient-to-r from-red-500/15 via-red-400/10 to-red-500/15 
                backdrop-blur-md px-6 py-4 shadow-lg shadow-red-900/30"
      >
        <p className="text-sm text-red-100 text-center leading-relaxed">
          This dashboard visualizes user engagement metrics, specifically how
          many users interact with{" "}
          <span className="text-yellow-300 font-semibold">BUY</span> and{" "}
          <span className="text-purple-300 font-semibold">ENROLL</span> actions
          for each course.
          <span>
            Actual monitoring of CPU usage, memory, and other system-level
            metrics is handled via{" "}
            <strong className="text-[#FF9830]">Grafana</strong>, which is
            accessible only to developers to ensure the website’s health,
            performance, and stability.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;