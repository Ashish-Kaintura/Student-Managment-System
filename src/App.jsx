// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";
import Assignments from "./Pages/Assignments";
import LiveClasses from "./Pages/LiveClasses";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Forum from "./Pages/Forum";
import CourseDetail from "./Pages/CourseDetail";
import Notifications from "./Pages/Notifications";
import Profile from "./Pages/Profile";
import Certificates from "./Pages/Certificates";
import ChatSupport from "./Pages/ChatSupport";
const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/live-classes" element={<LiveClasses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/support-chat" element={<ChatSupport />} />
      </Route>
    </Routes>
  );
};

export default App;
