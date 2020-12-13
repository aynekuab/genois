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

  const dispatch = useDispatch();

  const addCard = (card) => {
    dispatch(AddArticle(card));
  };
  // const removeCard = data_id => {
  //    dispatch(removeArticle(data_id))
  // }

  console.log(articles);
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch, addCard]);

  return (
    <div className="ArticlesCard-Container">
      <div className="articles-card">
        {articles.map((item) => (
          <Article key={item.id} display={item} />
        ))}
      </div>
      <AddCard add={addCard}></AddCard>
    </div>
  );
}
