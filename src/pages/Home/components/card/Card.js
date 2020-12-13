import "./Card.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LinkIcon from "@material-ui/icons/Link";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteVideo } from "../../../../redux/actions";

const useStyles = makeStyles({
  root: {
    maxWidth: 150,
    maxHeight: 200,
  },
  likeicon : {

  },
  title: {
    fontSize: 10,
  },
  header: {
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  actions: {
    padding: 0,
  },
});

export default function Cards(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [display, setDisplay] = useState(props.display);

  const [is_fave, setIs_fave] = useState(display.is_favorite == 1);

  let color = {}
  if(is_fave){
    color = {fill:"orange"}
  }
  return (
    <div className="Card-container">
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          title={<p className={classes.title}>{display.header}</p>}
          subheader={<p className={classes.title}>{display.created_at.substring(0,10)}</p>}
        />

        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            {display.comment}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableSpacing>
          <IconButton aria-label="add to favorites" onClick = {
            () => {setIs_fave(!is_fave)
                  props.like(display.data_id)}
          }>
            <FavoriteIcon style = {color} />
          </IconButton>
          <IconButton
            onClick={() => props.remove(display.data_id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => (window.location.href = display.link)}
            arial-label="link"
          >
            <LinkIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
