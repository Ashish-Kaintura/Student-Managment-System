import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Divider,
  Box,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

const statusColors = {
  Pending: "warning",
  Submitted: "success",
  Overdue: "error",
};

const AssignmentCard = ({ assignment, onSubmitClick }) => {
  const { title, dueDate, status, course } = assignment;

  return (
    <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition rounded-xl">
      <CardContent>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <AssignmentIcon color="primary" />
          <div>
            <Typography variant="h6" className="text-gray-800 dark:text-white">
              {title}
            </Typography>
            <Typography
              variant="body2"
              className="text-gray-500 dark:text-gray-300"
            >
              Course: {course || "General"}
            </Typography>
          </div>
        </Box>

        <Divider className="my-2" />

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <div>
            <Typography
              variant="body2"
              className="text-gray-600 dark:text-gray-300"
            >
              Due Date: {dueDate}
            </Typography>
            <Chip
              label={status}
              color={statusColors[status] || "default"}
              size="small"
              className="mt-1"
            />
          </div>

          <Box display="flex" gap={1}>
            {status === "Pending" && (
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={onSubmitClick}
              >
                Submit
              </Button>
            )}
            <Button variant="outlined" size="small" color="secondary">
              View
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AssignmentCard;