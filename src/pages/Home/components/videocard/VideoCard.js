import "./VideoCard.css";
import Card from "../card/Card";
import { useEffect,useState
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos, deleteVideo ,addVideo, likeVideo } from "../../../../redux/actions";
import AddCard from '../../components/Addcard/AddCard'

export default function VideoCard(props) {

  //i Dont know this wont work 
  const videos = useSelector((state) => state.videos);
  
  const [video_state,setVideo_state] = useState(videos)

  const dispatch = useDispatch();
  
  const deleteCard = (data_id) => {
    setVideo_state([videos.filter((video)=>video.data_id !== data_id)])
    dispatch(deleteVideo(data_id))
  }
  
  const likeCard = (data_id) =>{
    
    dispatch(likeVideo(data_id))
  }
 
  const addCard_video = (video) => {
    setVideo_state([video,...video_state])
    dispatch(addVideo(video))
  }
  
  useEffect(() => {
    dispatch(fetchVideos());
  },[video_state,dispatch]);
  
  
  return (
    <div className="VideoCard-Container">
      {videos.map((item) => (

        <Card key = {Math.random()} like ={likeCard}  remove = {deleteCard} display={item} />
      ))}
      <AddCard add ={addCard_video} />
    </div>
  );
}