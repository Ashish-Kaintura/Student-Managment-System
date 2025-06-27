import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  LinearProgress,
  Typography,
  Chip,
  Button,
  Collapse,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DownloadIcon from "@mui/icons-material/Download";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

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
          "https://media.licdn.com/dms/image/D4D12AQFCl1qqc4AhPg/article-cover_image-shrink_720_1280/0/1711732902781?e=2147483647&v=beta&t=Lm-yRroL8cE6lY2OqeTT8CQFqqpWXJ1kAsLnKRAhY4w",
        videoUrl: "https://www.youtube.com/embed/N3AkSS5hXMA",
        status: "completed",
        materialUrl: "https://example.com/react-intro-materials.pdf",
      },
      {
        title: "JSX and Components",
        description: "Learn how JSX works and how to build React components.",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ70lRtF7wXP7tZNeYnlbb29tzyNPCMwdBVw&s",
        videoUrl: "https://www.youtube.com/embed/0riHps91AzE",
        status: "in-progress",
        materialUrl: "https://example.com/jsx-materials.pdf",
      },
      {
        title: "Props and State",
        description: "Understand component communication and state handling.",
        thumbnail:
          "https://miro.medium.com/v2/resize:fit:1200/0*wGaUQvXc4HymloHn.jpg",
        videoUrl: null,
        status: "locked",
        materialUrl: null,
      },
    ],
  },
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = dummyCourses[id];
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  const handleOpenVideoModal = (url) => {
    setActiveVideoUrl(url);
    setVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setVideoModalOpen(false);
    setActiveVideoUrl(null);
  };

  if (!course) return <p className="text-red-500 text-lg">Course not found.</p>;

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
        <p className="text-sm text-gray-600 mb-2">
          Instructor: {course.instructor}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Chip label={course.category} color="primary" size="small" />
          <Chip
            icon={<AccessTimeIcon fontSize="small" />}
            label={course.duration}
            size="small"
          />
          {course.tags.map((tag, i) => (
            <Chip key={i} label={tag} variant="outlined" size="small" />
          ))}
        </div>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <div>
          <p className="text-sm text-gray-500 mb-1">Progress:</p>
          <LinearProgress
            variant="determinate"
            value={course.progress}
            sx={{ height: 10, borderRadius: 5 }}
          />
          <p className="text-sm text-blue-600 mt-1">
            {course.progress}% completed
          </p>
        </div>
      </div>

      {/* Syllabus */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Syllabus</h2>
        {course.syllabus.map((item, i) => (
          <div key={i} className="bg-white border rounded-xl shadow p-4">
            {/* Header with toggle */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleExpand(i)}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {i + 1}. {item.title}
                </h3>
                <Chip
                  label={
                    item.status === "completed"
                      ? "Completed"
                      : item.status === "in-progress"
                      ? "In Progress"
                      : "Locked"
                  }
                  color={
                    item.status === "completed"
                      ? "success"
                      : item.status === "in-progress"
                      ? "warning"
                      : "default"
                  }
                  size="small"
                  className="mt-1"
                />
              </div>
              <IconButton size="small">
                {expandedIndex === i ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </div>

            {/* Collapsible body */}
            <Collapse in={expandedIndex === i}>
              <div className="mt-4 flex flex-col md:flex-row gap-5">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full md:w-48 h-28 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    {item.videoUrl && item.status !== "locked" && (
                      <button
                        onClick={() => handleOpenVideoModal(item.videoUrl)}
                        className="flex items-center gap-1 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                        type="button"
                      >
                        Watch Video
                      </button>
                    )}
                    {item.materialUrl && (
                      <a
                        href={item.materialUrl}
                        download
                        className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                      >
                        <DownloadIcon fontSize="small" /> Download Material
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Collapse>
            <Dialog
              open={videoModalOpen}
              onClose={handleCloseVideoModal}
              maxWidth="md"
              fullWidth
            >
              <DialogTitle>🎬 Watch Lecture</DialogTitle>
              <DialogContent dividers>
                {activeVideoUrl && (
                  <div className="aspect-video w-full">
                    <iframe
                      src={activeVideoUrl}
                      title="Lecture Video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-[400px] rounded-lg"
                    ></iframe>
                  </div>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseVideoModal}>Close</Button>
              </DialogActions>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}
