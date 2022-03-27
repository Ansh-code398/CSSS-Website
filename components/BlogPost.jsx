import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ title, desc, img, author, date, profile, color, bgColor }) {
  return (
    <Card sx={{ maxWidth: 345, color: color, background: bgColor, border: '5px solid white', margin: '50px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={profile}>
            {author}
          </Avatar>
        }
        sx={{
            color: color,
            background: bgColor,
        }}
        title={`Title - ${title}, Date- ${date}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt={title}
      />
      <CardContent sx={{
            color: color,
            background: bgColor,
        }}>
        <Typography variant="body2">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}