import "../components/Card.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';

export default function Cards(props) {
  return (
    <div className="Card-container">
      <Card className="card">
        <CardHeader
          title="End Game"
          subheader="September 14, 2016"
        />
        <CardMedia
          className= "img-sty"
          image="https://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png"
          title="End game"
        />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="delete">
         <DeleteIcon/>
        </IconButton>
        <IconButton arial-label = "link">
            <LinkIcon/>
        </IconButton>
        
      </CardActions>
      </Card>
    </div>
  );
}
