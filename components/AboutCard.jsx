import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, IconButton } from '@mui/material';

function ActionAreaCard({ title, desc, img, color, bgColor }) {
    return (
        <Card sx={{ maxWidth: 400, border: '5px solid white', bgcolor: bgColor, color: color, margin: '10px' }}>
            <CardContent sx={{textAlign: 'center'}}>
                <IconButton>
                    <Avatar src={img} sx={{border: '5px solid white', padding: '2'}} />
                </IconButton>
                <Typography gutterBottom variant="h5" component="div" sx={{color: color}}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{color: color}}>
                    {desc}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ActionAreaCard;