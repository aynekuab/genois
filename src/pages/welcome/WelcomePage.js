import SignIn from './components/SignIn';
import '../welcome/WelcomePage.css'

export default  function WelcomePage (props){
    return(
        <div className ="Welcome-page-main-container">
            <SignIn/>
        </div>
    );

}