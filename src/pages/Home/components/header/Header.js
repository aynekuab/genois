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
        <h2 className = "second-text">Your favorite links, all in one</h2>
      </div>

      <div className="user-name-intro">
        <div className="username">
          <h1 className="name">Hello, Abele</h1>
        </div>
      </div>
    </div>
  );
}
