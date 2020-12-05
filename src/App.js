
import './App.css';
import {Switch,Router} from 'react-router-dom';
import WelcomePage from './pages/welcome/WelcomePage';
import Header from "./pages/Home/components/Header"
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="App">
     <Home></Home>
    </div>
  );
}

export default App;
