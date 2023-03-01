import React, { useState } from 'react';

function PostForms() {
  const [postContent, setPostContent] = useState('');
  const [postList, setPostList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [reactionList, setReactionList] = useState([]);
  const [commentContent, setCommentContent] = useState('');


  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

 
const handlePostSubmit = () => {
    if (!postContent.trim()) {
      return; // Return without adding an empty post to the postList
    }
    setPostList([...postList, postContent]);
    setPostContent('');
  };
  

  const handlePostDelete = (index) => {
    const newPostList = [...postList];
    newPostList.splice(index, 1);
    setPostList(newPostList);
  };

  const handleCommentSubmit = (index, commentContent) => {
    setCommentList([...commentList, { content: commentContent, postIndex: index }]);
  };
  

  const handleReactionSubmit = (index, reaction) => {
    const newReactionList = [...reactionList];
    if (newReactionList[index]) {
      newReactionList[index].push(reaction);
    } else {
      newReactionList[index] = [reaction];
    }
    setReactionList(newReactionList);
  };

  const handleReactionDelete = (index, reaction) => {
    const newReactionList = [...reactionList];
    newReactionList[index] = newReactionList[index].filter((r) => r !== reaction);
    setReactionList(newReactionList);
  };

  return (
    <>
    
    <div className="w-full max-w-md m-auto mt-8 p-4 bg-white rounded-lg shadow-md">
        <div className=' '>

      <div className="flex justify-between">
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Create Post
        </button>
      </div>
      <div className="mt-4">
        <textarea
          className="w-full border border-gray-300 p-2 rounded-md"
          value={postContent}
          onChange={handlePostChange}
          placeholder="Write your post here..."
          ></textarea>
          </div>
      </div>
      <div className="mt-4">
        <button
          className="bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handlePostSubmit}
        >
          Post
        </button>
        <button className="bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded" onClick={() => handlePostDelete()}>
          Cancel
        </button>
      </div>
      <div className="mt-4">

      {postList.map((post, index) => (
  <div className="border border-gray-300 p-2 rounded-md mt-2" key={index}>
    {post}
    <div className="flex items-center mt-2">
    
  <button
    className="bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
    onClick={() => {
      const commentContent = prompt("Write your comment here:");
      if (commentContent) {
        handleCommentSubmit(index, commentContent);
      }
    }}
    
  >
    Reply
  </button>
  

  
      <button className="bg-white hover:bg-red-700 text-black font-bold py-1 px-2 rounded mr-2" onClick={() => handlePostDelete(index)}>
        Delete
      </button>
    </div>
    <div className="mt-2">
      {commentList
        .filter((comment) => comment.postIndex === index)
        .map((comment, index) => (
          <div className="border border-gray-300 p-2 rounded-md mt-2" key={index}>
            {comment.content}
          </div>
        ))}
    </div>
  </div>
))}

        </div>
        </div>
        </>
  )
        }
        export default PostForms;