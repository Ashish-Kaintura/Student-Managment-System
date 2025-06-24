import React from "react";
import { Button, Chip } from "@mui/material";

const getStatusColor = (status) => {
  switch (status) {
    case "Submitted":
      return "success";
    case "Pending":
      return "warning";
    case "Overdue":
      return "error";
    default:
      return "default";
  }
};

const AssignmentCard = ({ assignment }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">{assignment.title}</h2>
        <Chip label={assignment.status} color={getStatusColor(assignment.status)} />
      </div>
      <p className="text-sm text-gray-500 mb-2">Due: {assignment.dueDate}</p>
      <Button
        variant="outlined"
        color={assignment.status === "Pending" ? "primary" : "success"}
        fullWidth
      >
        {assignment.status === "Pending" ? "Submit Now" : "View"}
      </Button>
    </div>
  );
};

export default AssignmentCard;
