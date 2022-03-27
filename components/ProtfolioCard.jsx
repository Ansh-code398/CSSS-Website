import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";

function ActionAreaCard({ title, img, color, bgColor }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        border: "5px solid white",
        bgcolor: bgColor,
        color: color,
        margin: "10px",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <IconButton>
          <Avatar src={img} sx={{ minWidth: "100px", minHeight: "100px" }} />
        </IconButton>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: color, textAlign: "center" }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ActionAreaCard;
