import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import VideocamIcon from "@mui/icons-material/Videocam";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const stats = [
  {
    label: "Enrolled Courses",
    value: 5,
    icon: <SchoolIcon color="primary" />,
  },
  {
    label: "Assignments Done",
    value: 12,
    icon: <AssignmentTurnedInIcon color="success" />,
  },
  {
    label: "Live Classes Attended",
    value: 18,
    icon: <VideocamIcon color="error" />,
  },
  {
    label: "Progress Avg",
    value: "85%",
    icon: <TrendingUpIcon color="info" />,
  },
];

const activityData = [
  { date: "Mon", minutes: 40 },
  { date: "Tue", minutes: 30 },
  { date: "Wed", minutes: 50 },
  { date: "Thu", minutes: 20 },
  { date: "Fri", minutes: 60 },
];

const progressData = [
  { course: "React", percent: 90 },
  { course: "DSA", percent: 75 },
  { course: "AI", percent: 65 },
];

const schedule = [
  { time: "10:00 AM", course: "Math Live Class" },
  { time: "2:00 PM", course: "DSA Doubt Session" },
];

const activities = [
  "Submitted Assignment 4 in React",
  "Joined AI Live Class",
  "New Certificate: HTML & CSS",
];

const Dashboard = () => {
  return (
    <div>
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Hello, Ashish
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
          Here’s what’s happening today in your learning journey
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((item, i) => (
          <Card
            key={i}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white shadow-md"
          >
            <CardContent className="flex items-center gap-4">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <Typography variant="body2">{item.label}</Typography>
                <Typography variant="h6" className="font-bold">
                  {item.value}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Middle Section: Schedule + Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Upcoming Schedule */}
        <Card className="bg-white dark:bg-gray-800 col-span-2">
          <CardContent>
            <Typography
              variant="h6"
              className="mb-4 text-gray-800 dark:text-white"
            >
              📅 Upcoming Schedule
            </Typography>
            {schedule.map((item, i) => (
              <div
                key={i}
                className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700"
              >
                <span>{item.course}</span>
                <span className="font-semibold">{item.time}</span>
              </div>
            ))}
            {schedule.length === 0 && <p>No classes today.</p>}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white dark:bg-gray-800">
          <CardContent className="flex flex-col gap-3">
            <Typography
              variant="h6"
              className="mb-2 text-gray-800 dark:text-white"
            >
              Quick Actions
            </Typography>
            <button
              variant="contained"
              color="primary "
              className="bg-green-600 text-white py-2 rounded-lg uppercase"
            >
              Join Next Live Class
            </button>
            <Button variant="outlined" color="secondary">
              Submit Assignment
            </Button>
            <Button variant="outlined">Ask in Forum</Button>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white dark:bg-gray-800">
          <CardContent>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-3">
              Weekly Activity (Minutes Spent)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={activityData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="minutes" fill="#6366F1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800">
          <CardContent>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-3">
              Course Progress (%)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="course" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="percent"
                  stroke="#10B981"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-white dark:bg-gray-800 mb-8">
        <CardContent>
          <Typography
            variant="h6"
            className="mb-3 text-gray-800 dark:text-white"
          >
            🔔 Recent Activity
          </Typography>
          <ul className="space-y-2">
            {activities.map((a, i) => (
              <li key={i} className="text-sm text-gray-700 dark:text-gray-300">
                • {a}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
