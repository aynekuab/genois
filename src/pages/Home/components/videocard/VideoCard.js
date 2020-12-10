import "./VideoCard.css";
import Card from "../card/Card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos } from "../../../../redux/actions";

export default function VideoCard(props) {
  const videos = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  function onDelete(id){
    deleteVideo(id)
  }
  return (
    <div className="VideoCard-Container">
      {
        videos.map(item =>(<Card delete = {onDelete} display = {item}/>))
      }
    </div>
  );
}
