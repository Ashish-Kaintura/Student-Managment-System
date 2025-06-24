import React, { useState } from "react";
import { TextField, IconButton, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const initialMessages = [
  {
    id: 1,
    text: "Hello, I need help with my assignment submission.",
    sender: "student",
  },
  {
    id: 2,
    text: "Hi! Sure, could you please share the assignment name?",
    sender: "support",
  },
  {
    id: 3,
    text: "It’s the one from the DSA course, week 3.",
    sender: "student",
  },
];

const ChatSupport = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMsg, setNewMsg] = useState("");

  const handleSend = () => {
    if (newMsg.trim() === "") return;
    setMessages([
      ...messages,
      { id: Date.now(), text: newMsg, sender: "student" },
    ]);
    setNewMsg("");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-4 h-[75vh] flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Avatar alt="Support" src="/support-avatar.png" />
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Support Chat
        </h1>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto space-y-3 px-2 pb-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "student" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-xl text-sm ${
                msg.sender === "student"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input box */}
      <div className="mt-4 flex items-center border-t pt-3 dark:border-gray-700">
        <TextField
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          fullWidth
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          size="small"
        />
        <IconButton onClick={handleSend} color="primary" sx={{ ml: 1 }}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatSupport;
