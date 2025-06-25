import React, { useState } from "react";
import { MdUpcoming, MdPending, MdCheckCircle, MdError } from "react-icons/md";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { LinearProgress } from "@mui/material";

const allAssignments = [
  {
    id: 1,
    title: "React Basics",
    course: "React for Beginners",
    due: "2025-07-10",
    status: "Pending",
    completedParts: 1,
    totalParts: 4,
  },
  {
    id: 2,
    title: "API Integration",
    course: "JavaScript Mastery",
    due: "2025-07-12",
    status: "Upcoming",
    completedParts: 0,
    totalParts: 3,
  },
  {
    id: 3,
    title: "UI Components",
    course: "React for Beginners",
    due: "2025-06-15",
    status: "Pending",
    completedParts: 2,
    totalParts: 4,
  },
  {
    id: 4,
    title: "Hooks Deep Dive",
    course: "React for Beginners",
    due: "2025-05-30",
    status: "Overdue",
    completedParts: 3,
    totalParts: 4,
  },
  {
    id: 5,
    title: "SEO Management",
    course: "SEO",
    due: "2025-05-28",
    status: "Submitted",
    file: "seo-management-assignment.pdf",
    completedParts: 4,
    totalParts: 4,
  },
];

const statusIcons = {
  Upcoming: <MdUpcoming className="text-blue-600 text-lg" />,
  Pending: <MdPending className="text-yellow-600 text-lg" />,
  Overdue: <MdError className="text-red-600 text-lg" />,
  Submitted: <MdCheckCircle className="text-green-600 text-lg" />,
};

export default function Assignments() {
  const [selectedStatus, setSelectedStatus] = useState("Upcoming");
  const [openModal, setOpenModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenModal = (assignment) => {
    setSelectedAssignment(assignment);
    setUploadedFile(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedAssignment(null);
  };

  const handleFileUpload = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (uploadedFile) {
      alert(
        `Assignment "${selectedAssignment.title}" submitted: ${uploadedFile.name}`
      );
      handleCloseModal();
    } else {
      alert("Please upload a file before submitting.");
    }
  };

  const categorizedAssignments = {
    Upcoming: [],
    Pending: [],
    Overdue: [],
    Submitted: [],
  };

  const today = new Date();

  allAssignments.forEach((assignment) => {
    if (assignment.status === "Submitted") {
      categorizedAssignments.Submitted.push(assignment);
    } else {
      const dueDate = new Date(assignment.due);
      if (dueDate > today) {
        categorizedAssignments.Upcoming.push(assignment);
      } else if (assignment.status === "Pending") {
        categorizedAssignments.Pending.push(assignment);
      } else {
        categorizedAssignments.Overdue.push(assignment);
      }
    }
  });

  const assignmentList = categorizedAssignments[selectedStatus];

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        📚 My Assignments
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or course..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Main List */}
        <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {statusIcons[selectedStatus]} {selectedStatus} Assignments
          </h2>

          {assignmentList.length === 0 ? (
            <p className="text-gray-500">No assignments found.</p>
          ) : (
            <ul className="space-y-4">
              {assignmentList
                .filter(
                  (a) =>
                    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    a.course.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((a) => (
                  <li
                    key={a.id}
                    className="bg-gray-100 hover:bg-gray-200 rounded-xl px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm transition"
                  >
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-gray-800">
                        {a.title}
                      </p>
                      <p className="text-sm text-gray-600">{a.course}</p>
                      <span className="text-sm text-gray-500">
                        Due: {a.due}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0">
                      <button
                        onClick={() => handleOpenModal(a)}
                        className="px-3 py-1 border border-gray-300 text-white rounded text-sm hover:bg-white hover:text-green-700 bg-green-700"
                      >
                        View
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Assignment Status
          </h3>

          <div className="space-y-3">
            {["Upcoming", "Pending", "Overdue", "Submitted"].map((status) => {
              const isActive = selectedStatus === status;
              const baseColor =
                status === "Upcoming"
                  ? "blue"
                  : status === "Pending"
                  ? "yellow"
                  : status === "Overdue"
                  ? "red"
                  : "green";

              return (
                <div
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`flex items-center justify-between cursor-pointer px-4 py-3 rounded-lg border transition ${
                    isActive
                      ? `bg-${baseColor}-100 border-${baseColor}-400`
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 text-${baseColor}-700`}
                  >
                    {statusIcons[status]} <span>{status}</span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full bg-${baseColor}-200 text-${baseColor}-800`}
                  >
                    {categorizedAssignments[status]?.length}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Assignment View Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>📄 Assignment Details</DialogTitle>
        <DialogContent dividers>
          {selectedAssignment && (
            <>
              <div className="mt-4">
                <Typography className="mb-1 font-medium text-sm">
                  Progress:
                </Typography>
                <div className="flex items-center gap-2">
                  <LinearProgress
                    variant="determinate"
                    value={
                      (selectedAssignment.completedParts /
                        selectedAssignment.totalParts) *
                      100
                    }
                    sx={{ width: "100%", height: 10, borderRadius: 5 }}
                  />
                  <Typography variant="body2">
                    {selectedAssignment.completedParts}/
                    {selectedAssignment.totalParts}
                  </Typography>
                </div>
              </div>
              <Typography variant="h6" className="mb-2">
                {selectedAssignment.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600 mb-1">
                Course: {selectedAssignment.course}
              </Typography>
              <Typography variant="body2" className="text-gray-600 mb-3">
                Due: {selectedAssignment.due}
              </Typography>

              {selectedAssignment.status === "Submitted" ? (
                <>
                  <Typography className="text-green-600 font-medium mb-2">
                    ✅ Already Submitted
                  </Typography>
                  <p className="text-sm text-gray-700">
                    Submitted File:{" "}
                    <strong>
                      {selectedAssignment.file || "assignment.pdf"}
                    </strong>
                  </p>
                </>
              ) : (
                <>
                  <Typography className="mb-2 font-medium">
                    📤 Upload your assignment file:
                  </Typography>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="mb-2"
                  />
                </>
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
          {selectedAssignment?.status !== "Submitted" && (
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!uploadedFile}
            >
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
