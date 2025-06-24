import React, { useState } from "react";
import { TextField, Typography, Chip } from "@mui/material";
import CourseCard from "../components/CourseCard";

// --- Sample Data ---
const enrolledCourses = [
    {
        id: 1,
        title: "React for Beginners",
        instructor: "Jane Doe",
        progress: 75,
        role: "Frontend Developer",
        category: "Frontend",
        description: "Learn the basics of React, including components, state, and props, to build interactive UIs."
    },
    {
        id: 2,
        title: "JavaScript Mastery",
        instructor: "John Smith",
        progress: 50,
        role: "Full Stack Developer",
        category: "Full Stack",
        description: "Master advanced JavaScript concepts, ES6+, asynchronous programming, and best practices."
    },
    {
        id: 3,
        title: "Data Structures",
        instructor: "Alex Johnson",
        progress: 90,
        role: "Backend Developer",
        category: "DSA",
        description: "Understand core data structures and algorithms to write efficient code and ace technical interviews."
    },
];

const suggestedCourses = [
    {
        id: 4,
        title: "Advanced React",
        instructor: "Emily Clark",
        role: "Frontend Developer",
        category: "Frontend",
        description: "Dive deeper into React with hooks, context, performance optimization, and advanced patterns."
    },
    {
        id: 5,
        title: "Node.js Basics",
        instructor: "David Kim",
        role: "Backend Developer",
        category: "Backend",
        description: "Get started with Node.js, building REST APIs, handling databases, and server-side JavaScript."
    },
    {
        id: 6,
        title: "AI for Developers",
        instructor: "Sara Lee",
        role: "AI Engineer",
        category: "AI",
        description: "Explore the fundamentals of artificial intelligence, machine learning, and practical AI applications."
    },
    {
        id: 7,
        title: "Firebase Essentials",
        instructor: "Ali Khan",
        role: "Full Stack",
        category: "Backend",
        description: "Learn to use Firebase for authentication, real-time databases, hosting, and serverless functions."
    },
];

// --- Extract all categories ---
const uniqueCategories = [...new Set(suggestedCourses.map((c) => c.category))];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat === selectedCategory ? "All" : cat);
  };

  const filteredSuggestions = suggestedCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4">
      {/* Enrolled Courses */}
      <Typography
        variant="h5"
        className="font-bold mb-4 text-gray-800 dark:text-white"
      >
        🎓 Enrolled Courses
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {enrolledCourses.map((course) => (
          <CourseCard key={course.id} course={course} enrolled />
        ))}
      </div>

      {/* Suggested Courses Title */}
      <Typography
        variant="h5"
        className="font-bold text-gray-800 dark:text-white mb-2"
      >
        Suggested Courses
      </Typography>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 mt-2">
        <input
          type="text"
          placeholder="Search by course title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white transition"
        />
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-1 rounded-full border text-sm font-medium transition ${
              selectedCategory === "All"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1 rounded-full border text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
              }`}
              onClick={() => handleCategorySelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {filteredSuggestions.length ? (
          filteredSuggestions.map((course) => (
            <div key={course.id} className="min-w-[280px]">
              <CourseCard course={course} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-300">
            No courses found matching your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Courses;
