import './ArticlesCard.css';
import AddCard from '../Addcard/AddCard';
import Article from './Article';
export default function ArticlesCard(props){
    const card = {
        link: "googel.com",
        comment: "the best way",
        header: "googel",
        data_id: 46 
    }
    return (
        <div className = "ArticlesCard-Container">
          <div className = "articles-card">
           
             <Article display = {card}></Article>
          </div>
           <AddCard></AddCard>
        </div>
    );
}
