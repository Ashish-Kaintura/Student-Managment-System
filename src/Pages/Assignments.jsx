import React from "react";
import AssignmentCard from "../components/AssignmentCard";

const dummyAssignments = [
  { title: "Assignment 1: React Basics", dueDate: "2025-06-25", status: "Pending" },
  { title: "Assignment 2: API Integration", dueDate: "2025-06-20", status: "Submitted" },
  { title: "Assignment 3: UI Components", dueDate: "2025-06-18", status: "Overdue" },
];

const Assignments = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">My Assignments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyAssignments.map((assignment, index) => (
          <AssignmentCard key={index} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default Assignments;
