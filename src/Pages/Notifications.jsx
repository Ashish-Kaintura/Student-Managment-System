import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Avatar,
  Box,
  Paper,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const notifications = [
  { id: 1, text: "New assignment in Data Structures", time: "2 hrs ago" },
  { id: 2, text: "Live class today at 5 PM", time: "4 hrs ago" },
  { id: 3, text: "You earned a certificate!", time: "1 day ago" },
];

const Notifications = () => {
  return (
    <Box sx={{ padding: 2, margin: 2 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary"
        gutterBottom
        sx={{ textAlign: "start" }}
      >
        Notifications
      </Typography>
      <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
        <List>
          {notifications.map((note, idx) => (
            <React.Fragment key={note.id}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  bgcolor: idx % 2 === 0 ? "grey.50" : "background.paper",
                  transition: "background 0.2s",
                  "&:hover": { bgcolor: "primary.50" },
                  py: 2,
                }}
              >
                <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                  <NotificationsIcon />
                </Avatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" fontWeight={600}>
                      {note.text}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="text.secondary">
                      {note.time}
                    </Typography>
                  }
                />
              </ListItem>
              {idx < notifications.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Notifications;
