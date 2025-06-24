import React from "react";
import ForumPostCard from "../components/ForumPostCard";

const dummyPosts = [
  {
    title: "How to prepare for final exam?",
    author: "Ritika Sharma",
    content: "Can anyone share notes or tips for the upcoming exams? I’m feeling nervous and don’t know where to start...",
    replies: 5,
  },
  {
    title: "React project ideas for beginners?",
    author: "Sahil Verma",
    content: "Looking for interesting React projects to build over the weekend. Any recommendations or GitHub links?",
    replies: 3,
  },
  {
    title: "Is attendance mandatory for live classes?",
    author: "Anjali Gupta",
    content: "Do we need to attend live sessions for attendance, or is watching recordings enough?",
    replies: 7,
  },
];

const Forum = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Discussion Forum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyPosts.map((post, index) => (
          <ForumPostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Forum;
