import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { format } from "timeago.js";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const options = ["עריכה", "מחיקה"];

export default function CommentsSection({ postId }) {
  const [comments, setComments] = useState([]);
  const userName = sessionStorage.getItem("userName");
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  const getPostsComments = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/comments?postId=${postId}`
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
          {/* {userName === comment.userName ? (
            <div className="flex justify-between w-1/4">
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    // maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ) : null} */}
        </div>
      ))}
    </div>
  );
}
