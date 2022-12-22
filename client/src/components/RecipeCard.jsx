import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import axios from "axios";
import EditPost from "../formFiles/EditPost";

const options = ["עריכה", "מחיקה"];

export default function RecipeCard({ recipe, profile }) {
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOnCloseEdit = () => setShowEdit(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deletePost = async (id) => {
    const { data } = axios.delete(`${process.env.REACT_APP_API}/posts/${id}`, id);
    return data;
  };
  const scroll = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Card
        sx={{ maxWidth: 345 }}
        className="mb-16 hover:shadow-2xl"
        style={{ height: "470px" }}
      >
        <CardMedia
          component="img"
          alt="dish"
          style={{ height: "300px", width: "400px" }}
          image={recipe.img.url}
        />
        <CardContent className="text-right">
          <Typography gutterBottom variant="h5" component="div">
            {recipe.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipe.description}
          </Typography>
        </CardContent>
        <CardActions className="flex justify-between">
          <Button
            size="medium"
            onClick={() => {
              navigate(`/recipe/${recipe._id}`);
              scroll();
            }}
          >
            למתכון המלא
          </Button>
          {profile == "yes" ? (
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
                    width: "20ch",
                  },
                }}
              >
                <MenuItem key={options[0]} onClick={() => setShowEdit(true)}>
                  {options[0]}
                </MenuItem>
                <MenuItem
                  key={options[1]}
                  onClick={() => deletePost(recipe._id)}
                >
                  {options[1]}
                </MenuItem>
              </Menu>
            </div>
          ) : null}
        </CardActions>
      </Card>
      <EditPost
        visible={showEdit}
        onClose={handleOnCloseEdit}
        postId={recipe._id}
      />
    </div>
  );
}
