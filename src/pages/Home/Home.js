import "./Home.css";
import Header from "./components/Header";
import Drawer from "@material-ui/core/Drawer";
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NotesIcon from '@material-ui/icons/Notes';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export default function Home(props) {
  return (
    <div className="Home-container">
      <Header></Header>
      <div className = "middle-section-container">
      <div className="side-drawer-container">
        
         <Divider />
        <List>
        <ListItem button >
              <ListItemIcon><VideoLabelIcon/></ListItemIcon>
              <ListItemText primary="Videos" />
        </ListItem>
        <ListItem button >
              <ListItemIcon><AssignmentIcon/></ListItemIcon>
              <ListItemText primary="Article" />
        </ListItem>
        <ListItem button >
              <ListItemIcon><NotesIcon/></ListItemIcon>
              <ListItemText primary="Notes" />
        </ListItem>
        <ListItem button >
              <ListItemIcon><MusicNoteIcon/></ListItemIcon>
              <ListItemText primary="Music" />
        </ListItem>
       
        </List> 
       
      </div>
      <div className = "display-section-container">
          
      </div>
      </div>
    </div>
  );
}
