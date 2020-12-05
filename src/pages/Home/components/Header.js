import "./Header.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Header(props) {
  return (
    <div className="Header-container">
      <div className="welcome-text">
        <h1 className="genois-text">Genois</h1>
      </div>

      <div className="user-name-intro">
        <div className="username">
          <h1 className="name">HELLO, Abele</h1>
        </div>
        <div className="button-navs">
          <BottomNavigation showLabels className="buttons-nav-style">
            <BottomNavigationAction label="Histroy" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          </BottomNavigation>
        </div>
      </div>
    </div>
  );
}