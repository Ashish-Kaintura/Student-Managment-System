import React from "react";
import { List, ListItem, ListItemText, Divider, Typography } from "@mui/material";

const notifications = [
  { id: 1, text: "New assignment in Data Structures", time: "2 hrs ago" },
  { id: 2, text: "Live class today at 5 PM", time: "4 hrs ago" },
  { id: 3, text: "You earned a certificate!", time: "1 day ago" },
];

const Notifications = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h1>
      <List>
        {notifications.map((note) => (
          <div key={note.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={note.text}
                secondary={<Typography variant="caption">{note.time}</Typography>}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default Notifications;
