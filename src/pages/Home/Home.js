import "./Home.css";
import Header from "./components/header/Header";

import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList'
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import AssignmentIcon from "@material-ui/icons/Assignment";
import NotesIcon from "@material-ui/icons/Notes";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import {Switch , Redirect, Route, Link} from 'react-router-dom';
import AddCard from "./components/Addcard/AddCard";
import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {fetchVideos} from '../../redux/actions'
import VideoCard from "./components/videocard/VideoCard";


export default function Home(props) {
  const todisplay_cards = useSelector((state) => state.videos);
  const dispatch = useDispatch()
  
 
  // useEffect(() => {
  //       dispatch(fetchVideos())
  // },[dispatch]);
  
  return (
    <div className="Home-container">
      <Header></Header>
      <div className="middle-section-container">
        <div className="side-drawer-container">
         <MenuList>
           <MenuItem component = {Link} to = "/videos">Videos</MenuItem>
           <MenuItem>Links</MenuItem>
           <MenuItem>Images</MenuItem>
         </MenuList>
      
        </div>
        <div className="display-section-container">
          <Switch>
            <Route path = "/videos">
              <VideoCard></VideoCard>
            </Route>
          </Switch>
           
        </div>
      </div>
    </div>
  );
}
