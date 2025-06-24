// src/pages/ForumDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

const ForumDetail = () => {
  const { id } = useParams();
  const [reply, setReply] = useState("");

  const post = {
    id,
    title: "How to prepare for final exam?",
    author: "Ritika Sharma",
    content: "Can anyone share notes or tips for the upcoming exams?",
    replies: [
      { name: "Sahil", content: "Start with previous year papers." },
      { name: "Neha", content: "Join the live revision sessions!" },
    ],
  };

  const handleReply = () => {
    alert(`Reply submitted: ${reply}`);
    setReply("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">Posted by: {post.author}</p>
      <p className="text-base text-gray-700 mb-6">{post.content}</p>

      <Typography variant="h6" className="mb-2">Replies:</Typography>
      {post.replies.map((r, i) => (
        <div key={i} className="mb-2 p-2 border rounded">
          <strong>{r.name}:</strong> {r.content}
        </div>
      ))}

      <div className="mt-6">
        <TextField
          label="Your Reply"
          fullWidth
          multiline
          rows={3}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <Button variant="contained" className="mt-3" onClick={handleReply}>
          Submit Reply
        </Button>
      </div>
    </div>
  );
};

export default ForumDetail;
