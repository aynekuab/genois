import './ArticlesCard.css';
import AddCard from '../Addcard/AddCard';
import Article from './Article';
export default function ArticlesCard(props){
    return (
        <div className = "ArticlesCard-Container">
          <div className = "articles-card">
             <Article></Article>
          </div>
           <AddCard></AddCard>
        </div>
    );
}
