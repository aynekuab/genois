import "./ArticlesCard.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddCard from "../Addcard/AddCard";
import Article from "./Article";
import {
  fetchArticles,
  AddArticle,
  removeArticle,
} from "../../../../redux/actions";

export default function ArticlesCard(props) {
  const articles = useSelector((state) => state.articles);
  
  const [article_state,setArticles] = useState(articles)
  const dispatch = useDispatch();

  const addCard = (card) => {
    setArticles([card,...article_state])
    dispatch(AddArticle(card));
  };

  const removeCard = (data_id) => {
    setArticles([article_state.filter((article)=>article.data_id !== data_id)])
    dispatch(removeArticle(data_id));
  };

  useEffect(() => {
    dispatch(fetchArticles());
  }, [article_state,dispatch]);

  return (
    <div className="ArticlesCard-Container">
      <div className="articles-card">
        {articles.map((item) => (
          <Article remove={removeCard} key={Math.random()} display={item} />
        ))}
          <AddCard add={addCard}></AddCard>
      </div>
      
    </div>
  );
}
