import React from "react";
import { Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const LiveClassCard = ({ session }) => {
  const now = new Date();
  const startTime = new Date(session.date + "T" + session.time);
  const isLive = now >= startTime;

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{session.title}</h2>
      <p className="text-sm text-gray-500 mb-1">Instructor: {session.instructor}</p>
      <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
        <AccessTimeIcon fontSize="small" />
        {session.date} @ {session.time}
      </p>
      <Button
        variant={isLive ? "contained" : "outlined"}
        color={isLive ? "success" : "primary"}
        disabled={!isLive}
        fullWidth
      >
        {isLive ? "Join Now" : "Starts Soon"}
      </Button>
    </div>
  );
};

export default LiveClassCard;
