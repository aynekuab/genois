import "./LinkCard.css";
import "../Addcard/AddCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCard from "../Addcard/AddCard";
import Link from "../linkcard/Link";
import { fetchLinks, AddLink,deleteLink } from "../../../../redux/actions";

export default function LinkCard(props) {
  const links = useSelector((state) => state.links);

  const dispatch = useDispatch();

  // const removeCard = data_id => {
  //    dispatch(removeArticle(data_id))
  // }
  useEffect(() => {
    dispatch(fetchLinks());
  }, [dispatch]);

  const addCard = (card) => {
    dispatch(AddLink(card));
  };
  

  const deleteCard = (data_id) => {
    dispatch(deleteLink(data_id));
  };

  return (
    <div className="LinkCard-container">
      {links.map((item) => (
        <Link remove = {deleteCard} key={item.id} display={item} />
      ))}

      <AddCard add={addCard}></AddCard>
    </div>
  );
}
