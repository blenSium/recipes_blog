import axios from "axios";
import React, { useState } from "react";


export default function CommentInput({userId, postId}) {
    const userName = sessionStorage.getItem("userName")
    const[comment,setComment] = useState({userName: userName, postId: postId})

    const addComment = async(obj) =>{
        const {data} = await axios.post('https://tame-lime-haddock-robe.cyclic.app/comments',obj);
        return data
    }

    const handleInput = (e)=>{
        setComment({...comment, [e.target.name]: e.target.value})
    }


  return (
      <div className="w-3/4 m-auto mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <input
           type={'text'}
            id="comment"
            rows="4"
            className="w-full text-right px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="...הוסף תגובה"
            name="content"
            required
            onChange={handleInput}
          />
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button
            onClick={()=> addComment(comment)}
            style={{backgroundColor:'#FAD2CC'}}
            className="inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-200"
          >
            Post comment
          </button>
          </div>
        </div>
  );
}
