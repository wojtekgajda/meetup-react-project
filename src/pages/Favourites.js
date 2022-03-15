import {useContext} from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {

  const favouriteCtx = useContext(FavouritesContext)

  let content
  if (favouriteCtx.totalFavourites === 0){
    content = <p>No favourites added</p>
  }else{
   content = <MeetupList meetups={favouriteCtx.favourites}/>
  }

  return (
    <section>
      <h2>Favourites</h2>
        {content}
    </section>
  )
}

export default FavouritesPage;
