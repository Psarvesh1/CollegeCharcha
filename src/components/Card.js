import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 415,
    marginTop: '30px'
  },
  media: {
    height: 240,
  },
});


const MediaCard = ({image, alt, title, desc, redirect}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={alt}
          onClick = {()=> navigate(redirect)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default MediaCard