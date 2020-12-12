import './Article.css'
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import ShareIcon from '@material-ui/icons/Share';
export default function Article(props){

return(
   <div className = "Artic-Container">
     <div className = "paper-card">
       <h4>hello</h4>
       <div className = "comment-section">
          <p>this is the comment</p>
          <IconButton>
             <DeleteIcon/>
          </IconButton>
          <IconButton>
             <LinkIcon/>
          </IconButton>
          <IconButton>
             <ShareIcon/>
          </IconButton>
       </div>
     </div>
   </div>
);

}