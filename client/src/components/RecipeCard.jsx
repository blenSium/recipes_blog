import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }} className="mb-16" style={{ height: "470px" }}>
      <CardMedia
        component="img"
        alt="dish"
        style={{ height: "300px", width: "400px" }}
        image={`./upload/${recipe.img}`}
      />
      <CardContent className="text-right">
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={() => navigate(`/recipe/${recipe._id}`)}>
          למתכון המלא
        </Button>
      </CardActions>
    </Card>
  );
}
