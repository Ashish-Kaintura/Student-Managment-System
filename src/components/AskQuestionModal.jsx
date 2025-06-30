// components/AskQuestionModal.jsx
import React from "react";
import { FaPlus } from "react-icons/fa";

const AskQuestionModal = ({ show, onClose, onSubmit, newPost, setNewPost }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex items-center gap-2 mb-4">
          <FaPlus className="text-blue-600" />
          <h2 className="text-xl font-bold text-gray-800">Ask a Question</h2>
        </div>
        <input
          type="text"
          placeholder="Enter question title"
          className="w-full border px-3 py-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Explain your question..."
          className="w-full border px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Post Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionModal;
