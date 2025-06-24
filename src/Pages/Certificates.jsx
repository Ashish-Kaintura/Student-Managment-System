import React from "react";
import { Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const completedCourses = [
  {
    course: "React for Beginners",
    instructor: "Jane Doe",
    certificate: "/certificates/react-beginners.pdf",
    grade: "A",
  },
  {
    course: "Data Structures & Algorithms",
    instructor: "John Smith",
    certificate: "/certificates/dsa.pdf",
    grade: "A+",
  },
];

const Certificates = () => {
  const downloadReport = () => {
    alert("Downloading report (mock PDF)");
    // In real app: trigger file download or generate via backend
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Certificates & Academic Reports
      </h1>

      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow mb-10">
        <Typography variant="h6" className="mb-4">
          📜 Completed Courses
        </Typography>

        <div className="space-y-4">
          {completedCourses.map((course, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{course.course}</p>
                <p className="text-sm text-gray-500">
                  Instructor: {course.instructor} | Grade: {course.grade}
                </p>
              </div>
              <a href={course.certificate} target="_blank" rel="noreferrer">
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  size="small"
                >
                  Download
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
        <Typography variant="h6" className="mb-3">
          📊 Overall Academic Report
        </Typography>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="border-b text-gray-700 dark:text-gray-300">
                <th className="px-3 py-2">Course</th>
                <th className="px-3 py-2">Credits</th>
                <th className="px-3 py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-gray-600 dark:text-gray-200">
                <td className="px-3 py-2">React for Beginners</td>
                <td className="px-3 py-2">4</td>
                <td className="px-3 py-2">A</td>
              </tr>
              <tr className="border-b text-gray-600 dark:text-gray-200">
                <td className="px-3 py-2">DSA</td>
                <td className="px-3 py-2">5</td>
                <td className="px-3 py-2">A+</td>
              </tr>
              <tr className="border-b text-gray-600 dark:text-gray-200 font-semibold">
                <td className="px-3 py-2">GPA</td>
                <td className="px-3 py-2">9.4</td>
                <td className="px-3 py-2">Excellent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Button
          variant="contained"
          className="mt-4"
          onClick={downloadReport}
          startIcon={<DownloadIcon />}
        >
          Download Full Report
        </Button>
      </div>
    </div>
  );
};

export default Certificates;
