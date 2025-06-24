// src/components/DashboardCard.jsx
import React from "react";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between hover:shadow-md transition">
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-bold text-blue-600">{value}</p>
      </div>
      <div className="text-blue-500 text-4xl">
        {icon}
      </div>
    </div>
  );
};

export default DashboardCard;
