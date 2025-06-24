// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    FaTachometerAlt,
    FaBook,
    FaClipboardList,
    FaVideo,
    FaComments,
    FaBell,
    FaCertificate,
} from "react-icons/fa";

const menuItems = [
    { to: "/", label: "Dashboard", icon: <FaTachometerAlt /> },
    { to: "/courses", label: "Courses", icon: <FaBook /> },
    { to: "/assignments", label: "Assignments", icon: <FaClipboardList /> },
    { to: "/live-classes", label: "Live Classes", icon: <FaVideo /> },
    { to: "/forum", label: "Forum", icon: <FaComments /> },
    { to: "/notifications", label: "Notifications", icon: <FaBell /> },
    { to: "/certificates", label: "Reports & Certificates", icon: <FaCertificate /> },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-400 dark:from-gray-900 dark:to-gray-800 shadow-lg h-screen p-6 hidden md:flex flex-col">
            <h2 className="text-3xl font-extrabold text-white dark:text-gray-100 mb-8 tracking-wide">Student ERP</h2>
            <ul className="space-y-2 flex-1">
                {menuItems.map((item) => (
                    <li key={item.to}>
                        <Link
                            to={item.to}
                            className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                                location.pathname === item.to
                                    ? "bg-white text-blue-600 font-semibold shadow dark:bg-gray-900 dark:text-blue-400"
                                    : "text-white hover:bg-blue-700 hover:text-white dark:text-gray-200 dark:hover:bg-gray-700"
                            }`}
                        >
                            <span className="mr-3 text-lg">{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mt-8 text-center text-white dark:text-gray-400 text-xs opacity-70">
                &copy; {new Date().getFullYear()} Student ERP
            </div>
        </div>
    );
};

export default Sidebar;
