import "./VideoCard.css";
import Card from "../card/Card";
import { useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos, deleteVideo } from "../../../../redux/actions";

export default function VideoCard(props) {
  const videos = useSelector((state) => state.videos);
  
  

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  


  return (
    <div className="VideoCard-Container">
      {videos.map((item) => (
        <Card key={item.id}  display={item} />
      ))}
    </div>
  );
}
