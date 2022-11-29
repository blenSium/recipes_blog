import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { format } from "timeago.js";

export default function CommentsSection({ postId }) {
  const [comments, setComments] = useState([]);
  const userName = sessionStorage.getItem("userName");

  const getPostsComments = async () => {
    const { data } = await axios.get(
      `https://tame-lime-haddock-robe.cyclic.app/comments?postId=${postId}`
    );
    setComments(data);
  };

  useEffect(() => {
    getPostsComments();
  }, [comments]);

  return (
    <div className="my-20">
      <p className="text-right font-bold underline pr-16 md:pr-60 ">
        ({comments.length}) תגובות
      </p>
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="flex-col text-right w-3/4 py-4 mx-auto mt-3  bg-opacity-40 border-b-2 border-r-2  sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3"
          style={{ borderRight: "5px solid #FAD2CC" }}
        >
          <div className="">
            <div className="flex-col mt-1">
              <div className="items-center  px-4 font-bold leading-tight ">
                <span className="ml-2 text-xs font-normal text-gray-500 mx-2">
                  {format(comment.createdAt)}
                </span>
                {comment.userName}
              </div>
              <div className="flex-1 px-4 ml-2 text-sm font-medium leading-loose text-gray-600">
                {comment.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
