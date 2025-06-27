import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Tooltip,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const CourseCard = ({ course, enrolled = false }) => {
  return (
    <Tooltip
      arrow
      placement="top"
      title={
        enrolled ? (
          ""
        ) : (
          <>
            <div className="text-lg">
              <p>
                <strong>Role:</strong> {course.role}
              </p>
              <p>
                <strong>Category:</strong> {course.category}
              </p>
              <p>
                <strong>Description:</strong> {course.description}
              </p>
            </div>
          </>
        )
      }
    >
      <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all rounded-xl">
        <CardContent className="flex flex-col justify-between h-full">
          <div>
            <Typography
              variant="h6"
              className="font-semibold text-gray-800 dark:text-white"
            >
              {course.title}
            </Typography>
            <Typography
              variant="body2"
              className="text-gray-600 dark:text-gray-300 mb-2"
            >
              by {course.instructor}
            </Typography>

            {enrolled && (
              <Box display="flex" alignItems="center" gap={2}>
                <CircularProgress
                  variant="determinate"
                  value={course.progress}
                  color="success"
                  size={40}
                />
                <Typography variant="body2">
                  {course.progress}% Completed
                </Typography>
              </Box>
            )}
          </div>

          <Link className="pt-4" to={`/courses/${course.id}`}>
            <Button
              color="success"
              variant={enrolled ? "contained" : "outlined"}
              fullWidth
              className="mt-4"
            >
              {enrolled ? "Continue Learning" : "Enroll Now"}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Tooltip>
  );
};

export default CourseCard;
