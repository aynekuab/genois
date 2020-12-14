import './Link.css';
import {useState} from 'react'
import Collapse from "@material-ui/core/Collapse";

import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
export default function Link(props){
    
    
    const link  = (props.display);
    const [is_fav,setIs_fav] = useState(false);
    const [color,setColor] = useState({fill:""});
    const [open, setOpen] = useState(false);

    return (
        <div className = "Link-Container">
          <div className = "link-card">
            <div className = "text-manger">
            <a  className = "link-text" href = {link.link} >{link.link}</a>
            </div>
            
             <IconButton onClick={()=>{

                 setIs_fav(!is_fav)
                 setColor({fill:"#db4256"})

             }}>
                 <FavoriteIcon style = {color}></FavoriteIcon>
             </IconButton>
             <IconButton onClick ={()=>{
               props.remove(link.data_id)
             }}>
                 <DeleteIcon></DeleteIcon>
             </IconButton>
             <IconButton onClick={()=>{setOpen(!open)}}>
                 <EditIcon></EditIcon>
             </IconButton>
             
          </div>
          <Collapse in={open}>
          <div className="link-editor">
            <TextField
              id="link"
              label="new link"
              size="medium"
              fullWidth
              onChange = { e =>{ link.link =  e.target.value}}
              placeholder={link.link}
            />
            <IconButton
              onClick={() => {
                props.edit(link)

                 console.log(link)
                
                 setOpen(!open)
              }}
            >
             <EditIcon/>
            </IconButton>
          </div>
        </Collapse>
        </div>
    );
}