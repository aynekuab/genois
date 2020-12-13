import "./VideoCard.css";
import Card from "../card/Card";
import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchVideos,
  deleteVideo,
  addVideo,
  likeVideo,
} from "../../../../redux/actions";
import AddCard from "../../components/Addcard/AddCard";

export default function VideoCard(props) {
  //i Dont know this wont work
  const videos = useSelector((state) => state.videos);

  const dispatch = useDispatch();

  const deleteCard = (data_id) => {
    dispatch(deleteVideo(data_id));
  };

  const likeCard = (data_id) => {
    dispatch(likeVideo(data_id));
  };
  const addCard = (video) => {
    dispatch(addVideo(video));
  };
 
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch, addCard]);

  return (
    <div className="VideoCard-Container">
      {videos.map((item) => (
        <Card
          like={likeCard}
          key={item.id}
          remove={deleteCard}
          display={item}
        />
      ))}
      <AddCard add={addCard} />
    </div>
  );
}
