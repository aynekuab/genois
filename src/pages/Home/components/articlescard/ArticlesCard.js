import "./ArticlesCard.css";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import AddCard from "../Addcard/AddCard";
import Article from "./Article";
import { fetchArticles } from "../../../../redux/actions";

export default function ArticlesCard(props) {
  const articles = useSelector((state) => state.articles);
  
  console.log(articles)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchArticles());
  },[]);
  
  return (
    <div className="ArticlesCard-Container">
      <div className="articles-card">
        
      </div>
      <AddCard></AddCard>
    </div>
  );
}
