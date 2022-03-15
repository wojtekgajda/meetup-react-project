import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import {useContext} from "react";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {

  const favouritesContext = useContext(FavouritesContext);
  const isFavourite = favouritesContext.itemIsFavourite(props.id);

  const handleToggleFavourite = () => {
    isFavourite ? favouritesContext.removeFavourite(props.id) : favouritesContext.addFavourite({
      id: props.id,
      title: props.title,
      address: props.addres,
      image: props.image,
      description: props.description,
    })

  }


  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleToggleFavourite}>{isFavourite ? 'Remove from favourites' : 'Add to favourites'}</button>
        </div>
      </li>
    </Card>
  )
}

export default MeetupItem;
