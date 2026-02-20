import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/metrics/click-summary");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMetrics();

    // poll every 5 seconds for live updates
    const interval = setInterval(fetchMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-purple-200 mb-6 text-center">
        Course Engagement Dashboard
      </h2>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg shadow-purple-900/40">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="course" stroke="#ddd" />
            <YAxis stroke="#ddd" />
            <Tooltip contentStyle={{ backgroundColor: "#1e1b4b", border: "none", color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#ddd" }} />
            <Bar dataKey="BUY" fill="#facc15" radius={[6,6,0,0]} />
            <Bar dataKey="ENROLL" fill="#7c3aed" radius={[6,6,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;