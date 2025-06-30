// components/ReplyModal.jsx
import React from "react";
import { IoClose } from "react-icons/io5";

const ReplyModal = ({ show, onClose, post, newReply, setNewReply, handleAddReply }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl relative animate-fade-in">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{post.title}</h3>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
          aria-label="Close"
        >
          <IoClose size={28} />
        </button>

        <div className="max-h-48 overflow-y-auto mb-4 border rounded p-2 bg-gray-50">
          {post.replies.length === 0 ? (
            <div className="text-gray-400 text-center py-4">No replies yet.</div>
          ) : (
            post.replies.map((reply) => (
              <div key={reply.id} className="border-t py-2 text-sm text-gray-800">
                <strong className="text-blue-700">{reply.author}</strong>: {reply.text}
              </div>
            ))
          )}
        </div>

        <textarea
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Write your reply..."
          rows={3}
        ></textarea>
        <button
          onClick={handleAddReply}
          disabled={!newReply.trim()}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition hover:bg-blue-700 disabled:opacity-50"
        >
          Post Reply
        </button>
      </div>
    </div>
  );
};

export default ReplyModal;
