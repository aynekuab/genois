import "./VideoCard.css";
import Card from "../card/Card";
import { useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos, deleteVideo ,addVideo } from "../../../../redux/actions";
import AddCard from '../../components/Addcard/AddCard'

export default function VideoCard(props) {
  const videos = useSelector((state) => state.videos);
  
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch,videos]);
  
  const deleteCard = (data_id) => {
    dispatch(deleteVideo(data_id))
  }
 
  const addCard = (video) => {
    dispatch(addVideo(video))
  }
  return (
    <div className="VideoCard-Container">
      {videos.map((item) => (
        <Card key={item.id}  remove = {deleteCard} display={item} />
      ))}
      <AddCard add ={addCard} />
    </div>
  );
}
