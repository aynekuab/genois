import "./SignIn.css";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

export default function SignIn(props) {
  return (
    <div className="SignIn-main-container">
      <div className="welcome-text-container">
        <h1 className="welome-text">Welcome to Genois</h1>
      </div>
      <div className="avatar-container">
        <Avatar className="avatar">
          <PersonIcon />
        </Avatar>
      </div>
      <div className="userinfo-container">
        <form className="form-classes" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="Username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </form>

        <div className="smt-button-container">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            Sign In
          </Button>
        </div>
        <Link
          component="button"
          variant="body2"
          
        >
           Don't Have any account? Join us
        </Link>
      </div>
    </div>
  );
}

function exportUserInfo(){

}