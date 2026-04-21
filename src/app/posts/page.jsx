import React from "react";
export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  } catch (err) {
    throw new Error("Failed to fetch Posts Data.");
  }
};

const PostPage = async () => {
  const postsData = await getPosts();
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold py-4 ">
        This is Posts page!
      </h1>
      <div className="max-w-7xl w-full mx-auto">{postsData.length}</div>
    </div>
  );
};

export default PostPage;
