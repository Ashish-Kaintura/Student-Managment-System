import React, { useState } from "react";
import ReplyModal from "./ReplyModal";

const ForumPostCard = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const [newReply, setNewReply] = useState("");

  const handleAddReply = () => {
    post.replies.push({ id: Date.now(), author: "You", text: newReply });
    setNewReply("");
    setShowModal(false);
  };

  return (
    <div className="border p-6 rounded-xl shadow-lg bg-white transition hover:shadow-xl">
      <h2 className="text-xl font-bold text-gray-900 mb-1">{post.title}</h2>
      <p className="text-xs text-gray-400 mb-2">by {post.author}</p>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <button
        onClick={() => setShowModal(true)}
        className="mt-2 text-blue-600 hover:underline text-sm font-medium"
      >
        {post.replies.length} Replies
      </button>

      {/* 🧩 Reusable Reply Modal */}
      <ReplyModal
        show={showModal}
        onClose={() => setShowModal(false)}
        post={post}
        newReply={newReply}
        setNewReply={setNewReply}
        handleAddReply={handleAddReply}
      />
    </div>
  );
};

export default ForumPostCard;
