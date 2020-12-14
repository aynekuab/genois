import "./Home.css";
import Header from "./components/header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import VideoCard from "./components/videocard/VideoCard";
import LinkCard from "./components/linkcard/LinkCard";

import ArticlesCard from "./components/articlescard/ArticlesCard";

export default function Home(props) {




  //there is an easier way to this but i want to be convinced
  
  return (
    <div className="Home-container">
      <Header></Header>
      <div className="middle-section-container">
        <div className="side-drawer-container">
          <div className="nav-links">
          </div>
          <div className="nav-links">
            <NavLink activeClassName="selected" to="/links">
              Links
            </NavLink>
          </div>
          <div className="nav-links">
            <NavLink activeClassName="selected" to="/articles">
              Articles
            </NavLink>
          </div>
          <div className="nav-links">
            <NavLink activeClassName="selected" to="/videos">
              Videos
            </NavLink>
          </div>
        </div>
        <div className="display-section-container">
          <Switch>
            <Redirect exact from="/" to ="/links"/>
            <Route exact path="/links">
              <LinkCard></LinkCard>
            </Route>
            <Route exact path="/articles">
              <ArticlesCard></ArticlesCard>
            </Route>
            <Route exact path="/videos">
              <VideoCard></VideoCard>
            </Route>
            <Redirect to ="/links"/>
          </Switch>
        </div>
      </div>
    </div>
  );
}
