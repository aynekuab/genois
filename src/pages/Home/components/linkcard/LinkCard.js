import "./LinkCard.css";
import "../Addcard/AddCard";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCard from "../Addcard/AddCard";
import Link from "../linkcard/Link";
import { fetchLinks, AddLink,deleteLink ,editLink} from "../../../../redux/actions";

export default function LinkCard(props) {
  const links = useSelector((state) => state.links);
  console.log(links)
  const [links_state,setLinks_state] = useState(links)
  const dispatch = useDispatch();
  
  
  const addCard = (card) => {
    setLinks_state([card,...links_state])
    dispatch(AddLink(card));
  };
  

  const deleteCard = (data_id) => {
    setLinks_state([links.filter((link)=>link.data_id !== data_id)])
    dispatch(deleteLink(data_id));
  };

  const editCard = (card) =>{
    dispatch(editLink(card))
  }
 
  useEffect(() => {
    dispatch(fetchLinks());
  },[links_state,dispatch]);

  return (
    <div className="LinkCard-container">
      {links.map((item) => (
        <Link edit = {editCard}remove = {deleteCard} key={Math.random()} display={item} />
      ))}

      <AddCard add={addCard}></AddCard>
    </div>
  );
}
