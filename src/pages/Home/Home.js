import "./Home.css";
import Header from "./components/header/Header";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import {useState} from 'react';
import { Switch, Route, Link,Redirect } from "react-router-dom";

import VideoCard from "./components/videocard/VideoCard";
import LinkCard from "./components/linkcard/LinkCard";
import ImageCard from "./components/imagecard/ImageCard";
import ArticlesCard from './components/articlescard/ArticlesCard';

export default function Home(props) {

  return (
    <div className="Home-container">
      <Header></Header>
      <div className="middle-section-container">
        <div className="side-drawer-container">
          <MenuList autoFocusItem>
            <MenuItem  component={Link} to="/videos">
              Videos
            </MenuItem>
            <MenuItem   component={Link} to="/links">
              Links
            </MenuItem>
            <MenuItem  component={Link} to="/images">
              Images
            </MenuItem>
            <MenuItem  component={Link} to="/articles">
              Articles
            </MenuItem>
          </MenuList>
        </div>
        <div className="display-section-container">
          <Switch>
          <Redirect exact from="/" to="/videos" />
            <Route path="/videos">
              <VideoCard></VideoCard>
            </Route>
            <Route exact path="/links">
              <LinkCard></LinkCard>
            </Route>
            <Route exact path="/images">
              <ImageCard></ImageCard>
            </Route>
            <Route exact path="/articles">
             <ArticlesCard></ArticlesCard>
            </Route>
            <Redirect  to="/videos" />
          </Switch>
        </div>
      </div>
    </div>
  );
}
