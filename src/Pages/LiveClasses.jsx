import React from "react";
import LiveClassCard from "../components/LiveClassCard";

const dummyLiveSessions = [
  { title: "Live React Q&A", instructor: "Jane Doe", date: "2025-06-23", time: "14:30" },
  { title: "Assignment Help Session", instructor: "John Smith", date: "2025-06-23", time: "17:00" },
  { title: "Career Guidance", instructor: "Alex", date: "2025-06-24", time: "11:00" },
];

const LiveClasses = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Live Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyLiveSessions.map((session, index) => (
          <LiveClassCard key={index} session={session} />
        ))}
      </div>
    </div>
  );
};

export default LiveClasses;
