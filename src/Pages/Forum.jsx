import React, { useState } from "react";
import ForumPostCard from "../components/ForumPostCard";
import AskQuestionModal from "../components/AskQuestionModal";
import {
  FaComments,
  FaPlus,
  FaQuestionCircle,
  FaUser,
  FaHistory,
} from "react-icons/fa";

const currentUser = {
  name: "Ritika Sharma",
};

const initialPosts = [
  {
    id: 1,
    title: "How to prepare for final exam?",
    author: "Ritika Sharma",
    content: "Can anyone share notes or tips for the upcoming exams?",
    replies: [{ id: 1, author: "Ritika Sharma", text: "Thanks!" },],
  },
  {
    id: 2,
    title: "React project ideas?",
    author: "Sahil Verma",
    content: "Any cool React projects to try?",
    replies: [
      {
        id: 1,
        author: "Ritika Sharma",
        text: "Build a to-do app with Firebase.",
      },
      {
        id: 2,
        author: "Sonu",
        text: "Build a to-do app with Firebase.",
      },
    ],
  },
];

const Forum = () => {
  const [tab, setTab] = useState("all");
  const [posts, setPosts] = useState(initialPosts);
  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const myQuestions = posts.filter((post) => post.author === currentUser.name);
  const myActivities = posts.filter((post) =>
    post.replies?.some((reply) => reply.author === currentUser.name)
  );

  const postsToDisplay =
    tab === "mine" ? myQuestions : tab === "activity" ? myActivities : posts;

  const handleAskQuestion = () => {
    const newQuestion = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      author: currentUser.name,
      replies: [],
    };
    setPosts([newQuestion, ...posts]);
    setShowModal(false);
    setNewPost({ title: "", content: "" });
    setTab("all");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FaComments className="text-blue-600 text-3xl" />
          <h1 className="text-2xl font-bold text-gray-800">Discussion Forum</h1>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <FaPlus />
          Ask a Question
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTab("all")}
          className={`flex items-center gap-2 px-4 py-2 rounded transition ${
            tab === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          <FaQuestionCircle />
          All Posts
        </button>
        <button
          onClick={() => setTab("mine")}
          className={`flex items-center gap-2 px-4 py-2 rounded transition ${
            tab === "mine"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          <FaUser />
          My Questions
        </button>
        <button
          onClick={() => setTab("activity")}
          className={`flex items-center gap-2 px-4 py-2 rounded transition ${
            tab === "activity"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          <FaHistory />
          My Activity
        </button>
      </div>

      {/* Posts */}
      {postsToDisplay.length === 0 ? (
        <p className="text-gray-500">No posts found for this section.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsToDisplay.map((post) => (
            <ForumPostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {/* Ask Question Modal */}
      <AskQuestionModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAskQuestion}
        newPost={newPost}
        setNewPost={setNewPost}
      />
    </div>
  );
};

export default Forum;
