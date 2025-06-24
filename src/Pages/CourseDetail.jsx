import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  LinearProgress,
  Typography,
  Chip,
  Card,
  CardContent,
  Divider,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DownloadIcon from "@mui/icons-material/Download";

const dummyCourses = {
  1: {
    title: "React for Beginners",
    instructor: "Jane Doe",
    description:
      "Learn the basics of React including components, hooks, and routing.",
    progress: 80,
    category: "Frontend",
    duration: "6 Weeks",
    tags: ["React", "JSX", "Hooks", "Routing"],
    syllabus: [
      {
        title: "Introduction to React",
        description: "Understand what React is and why it's useful.",
        thumbnail:
          "https://media.licdn.com/dms/image/v2/D4D12AQFCl1qqc4AhPg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711732902781?e=2147483647&v=beta&t=Lm-yRroL8cE6lY2OqeTT8CQFqqpWXJ1kAsLnKRAhY4w",
        videoUrl: "https://www.youtube.com/embed/N3AkSS5hXMA",
        status: "completed",
        isChecked: true,
        materialUrl: "https://example.com/react-intro-materials.pdf",
      },
      {
        title: "JSX and Components",
        description: "Learn how JSX works and how to build React components.",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ70lRtF7wXP7tZNeYnlbb29tzyNPCMwdBVw&s",
        videoUrl: "https://www.youtube.com/embed/0riHps91AzE",
        status: "in-progress",
        isChecked: false,
        materialUrl: "https://example.com/jsx-materials.pdf",
      },
      {
        title: "Props and State",
        description: "Understand component communication and state handling.",
        thumbnail:
          "https://miro.medium.com/v2/resize:fit:1200/0*wGaUQvXc4HymloHn.jpg",
        videoUrl: "https://www.youtube.com/embed/35lXWvCuM8o",
        status: "locked",
        isChecked: false,
        materialUrl: null,
      },
    ],
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const [syllabus, setSyllabus] = useState(dummyCourses[id]?.syllabus || []);
  const course = dummyCourses[id];

  const handleCheckboxToggle = (index) => {
    const updated = [...syllabus];
    updated[index].isChecked = !updated[index].isChecked;
    setSyllabus(updated);
  };

  if (!course) {
    return <p className="text-red-500 text-lg">Course not found.</p>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Card className="bg-white dark:bg-gray-800 shadow">
        <CardContent>
          <Typography
            variant="h4"
            className="font-bold mb-2 text-gray-800 dark:text-white"
          >
            {course.title}
          </Typography>

          <Typography
            variant="subtitle1"
            className="text-gray-500 dark:text-gray-300 mb-2"
          >
            Instructor: {course.instructor}
          </Typography>

          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <Chip label={course.category} color="primary" size="small" />
            <Chip
              icon={<AccessTimeIcon fontSize="small" />}
              label={course.duration}
              variant="outlined"
              size="small"
            />
            {course.tags.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                variant="outlined"
                size="small"
                className="dark:text-white"
              />
            ))}
          </div>

          <Typography className="text-gray-700 dark:text-gray-200 mb-4">
            {course.description}
          </Typography>

          <div className="mb-4">
            <Typography
              variant="body2"
              className="text-gray-600 dark:text-gray-300 mb-1"
            >
              Your Progress
            </Typography>
            <LinearProgress
              variant="determinate"
              value={course.progress}
              sx={{ height: 10, borderRadius: 4 }}
              color={course.progress >= 80 ? "success" : "primary"}
            />
            <p className="text-sm text-blue-600 mt-1">
              {course.progress}% completed
            </p>
          </div>

          <Divider className="my-6" />

          <Typography
            variant="h6"
            className="mb-3 text-gray-800 dark:text-white"
          >
            Syllabus
          </Typography>

          <div className="space-y-4">
            {syllabus.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col sm:flex-row items-start gap-4 shadow"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full sm:w-48 h-28 object-cover rounded-md"
                />

                <div className="flex-1">
                  <Typography
                    variant="subtitle1"
                    className="font-bold text-gray-800 dark:text-white"
                  >
                    {index + 1}. {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-600 dark:text-gray-300 mb-2"
                  >
                    {item.description}
                  </Typography>

                  <div className="flex flex-wrap gap-3 items-center mb-2">
                    {item.status === "completed" && (
                      <Chip label="Completed" color="success" size="small" />
                    )}
                    {item.status === "in-progress" && (
                      <Chip label="In Progress" color="warning" size="small" />
                    )}
                    {item.status === "locked" && (
                      <Chip label="Locked" color="default" size="small" />
                    )}

                    {item.status !== "locked" && (
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 text-sm underline"
                      >
                        Watch Lecture
                      </a>
                    )}

                    {item.materialUrl && (
                      <a
                        href={item.materialUrl}
                        download
                        className="text-sm text-green-600 underline flex items-center gap-1"
                      >
                        <DownloadIcon fontSize="small" /> Download Materials
                      </a>
                    )}
                  </div>

                  {/* {item.status !== "locked" && (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={item.isChecked}
                          onChange={() => handleCheckboxToggle(index)}
                          color="primary"
                        />
                      }
                      label="Mark as Complete"
                    />
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetail;