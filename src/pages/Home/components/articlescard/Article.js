import "./Article.css";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import LinkIcon from "@material-ui/icons/Link";
import ShareIcon from "@material-ui/icons/Share";
import Collapse from "@material-ui/core/Collapse";
import { sendEmail } from "../../../../redux/actions";
export default function Article(props) {
  const [article, setArticle] = useState(props.display);
  
  const sendinfo = {
    data_id: article.data_id,
    email: "",
  };
  
  const [info, setInfo] = useState(sendinfo);
  const [open, setOpen] = useState(false);

  return (
    <div className="Artic-Container">
      <div className="paper-card">
        <h4>{article.header}</h4>
        <div className="comment-section">
          <p>{article.comment}</p>
          <div className="buttons">
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <LinkIcon onClick={() => (window.location.href = article.link)} />
            </IconButton>
            <IconButton onClick={() => setOpen(!open)}>
              <ShareIcon />
            </IconButton>
          </div>
        </div>

        <Collapse in={open}>
          <div className="email-send-container">
            <TextField
              id="email"
              label="Email"
              multiline
              rowsMax={4}
              size="small"
              onChange={(e) => {
                setInfo({ ...info, email: e.target.value });
              }}
            />
            <IconButton
              onClick={() => {
                sendEmail(info);
                setOpen(!open)
              }}
            >
              <SendIcon />
            </IconButton>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
