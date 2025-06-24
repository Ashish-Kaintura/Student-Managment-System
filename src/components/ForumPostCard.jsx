import React from "react";
import { Button, Chip } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";

const ForumPostCard = ({ post }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{post.title}</h2>
      <p className="text-sm text-gray-600 mb-2">Posted by: {post.author}</p>
      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{post.content}</p>
      <div className="flex justify-between items-center">
        <Chip
          icon={<ChatBubbleOutlineIcon />}
          label={`${post.replies} replies`}
          color="primary"
          size="small"
        />
        <Link to={`/forum/${post.id}`}>
          <Button variant="outlined" size="small">
            View Discussion
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ForumPostCard;
