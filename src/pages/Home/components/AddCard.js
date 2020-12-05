import "../components/AddCard.css";
import clsx from "clsx";
import { useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function AddCard(props) {
  const classes = useStyles();

  const [expand, setExpand] = useState(false);

  return (
    <div className="AddCard-container">
      <Card className="Add-link">
        <CardHeader
          titleTypographyProps={{ variant: "subtitle2" }}
          title="Add Link"
          action={
            <IconButton
              aria-label="Add link"
              className={clsx(classes.expand, {
                [classes.expandOpen]: expand,
              })}
              onClick={() => {
                setExpand(!expand);
              }}
              aria-expanded={expand}
              aria-label="show more"
            >
              <AddIcon />
            </IconButton>
          }
        />
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <div className="add-link-form">
            <TextField
              id="header-text"
              label="Header"
              multiline
              rowsMax={4}
              
            />
            <TextField
              id="link-textarea"
              label="link"
              placeholder="Link"
              multiline
            />
            <TextField
              id="dis-textarea"
              label="Discription"
              multiline
              rows={4}
              placeholder ="Discription"
            />
            <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            Add
          </Button>
          </div>
        </Collapse>
      </Card>
    </div>
  );
}
