import {createContext, useState} from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([])

  function handleAddFavourite(favouriteMeetup) {
    setUserFavourites((prevState) => [...prevState, favouriteMeetup])
  }

  function handleRemoveFavourite(meetupId) {
    setUserFavourites((prevState) => prevState.filter((meetup) => meetup.id !== meetupId))
  }

  function handleItemFavourite(meetupId) {
    return userFavourites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: handleAddFavourite,
    removeFavourite: handleRemoveFavourite,
    itemIsFavourite: handleItemFavourite,
  }


  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  )
}

export default FavouritesContext;
