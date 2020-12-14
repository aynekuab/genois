import "./AddCard.css";
import clsx from "clsx";
import { useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
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
  const  newrecord = {
    header: "",
    comment: "",
    link: "",
    created_at: "",
    data_id: "",
  }

  const [record,setRecord] = useState(newrecord);

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
              onChange={ e => {
                setRecord({ ...record,header: e.target.value})
              }}
              
            />
            <TextField
              id="link-textarea"
              label="link"
              placeholder="Link"
              multiline
              onChange={ e => {
                setRecord({...record,link: e.target.value})
              }}
            />
            <TextField
              id="dis-textarea"
              label="Discription"
              multiline
              rows={4}
              placeholder ="Discription"
              onChange={ e => {
                setRecord({...record,comment: e.target.value})
              }}
            />
            <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            onClick = {()=>{
              
              props.add(record);
              setExpand(!expand);
              
            }}
          >
            Add
          </Button>
          </div>
        </Collapse>
      </Card>
    </div>
  );
}
