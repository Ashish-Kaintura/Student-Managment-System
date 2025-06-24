import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const notifications = [
  { id: 1, text: "New assignment posted in Math" },
  { id: 2, text: "Live class starts in 30 minutes" },
  { id: 3, text: "You have 2 new replies on your forum post" },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { dark, setDark } = useTheme();

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div
      position="static"
      className={`bg-gradient-to-b from-blue-600 to-blue-400 dark:from-gray-900 dark:to-gray-800 ${
        dark ? "dark" : ""
      }`}
    >
      <Toolbar className="flex justify-between">
        {/* Logo / Title */}
        <Typography
          variant="h6"
          className={`text-black font-semibold dark:text-white`}
        >
          {/* Student ERP */}
        </Typography>

        {/* Right Side Icons & Buttons */}
        <div className="flex items-center gap-4">
          {/* Notification */}
          <IconButton
            onClick={handleOpen}
            color="inherit"
            className="dark:text-white"
          >
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Dark Mode Toggle */}
          <IconButton
            onClick={() => setDark(!dark)}
            color="inherit"
            className="dark:text-white"
          >
            <Brightness4Icon />
          </IconButton>

          {/* Auth Buttons */}
          <Link to="/login">
            <button
              className="bg-white text-black px-4 py-1 rounded-sm hover:text-white hover:bg-black dark:bg-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-black"
              size="small"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white text-black px-4 py-1 rounded-sm hover:text-white hover:bg-black dark:bg-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-black">
              Sign Up
            </button>
          </Link>
          <Link to="/profile">
            <IconButton className="bg-white text-white hover:text-white hover:bg-black dark:bg-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-black">
              {/* Material UI Account Profile Icon */}
              <span style={{ display: "flex", alignItems: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  width="32"
                  fill="currentColor"
                >
                  <path d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
              </span>
            </IconButton>
          </Link>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              className: dark ? "dark:bg-gray-900 dark:text-white" : "",
            }}
          >
            {notifications.map((note) => (
              <MenuItem
                key={note.id}
                onClick={handleClose}
                className="dark:bg-gray-900 dark:text-white"
              >
                {note.text}
              </MenuItem>
            ))}
            {notifications.length === 0 && (
              <MenuItem disabled className="dark:bg-gray-900 dark:text-white">
                No notifications
              </MenuItem>
            )}
          </Menu>
        </div>
      </Toolbar>
    </div>
  );
};

export default Navbar;
