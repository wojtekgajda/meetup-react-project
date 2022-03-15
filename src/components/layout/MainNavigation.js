import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
import {useContext} from "react";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {

  const favouritesCtx = useContext(FavouritesContext)

  let favouritesCount = favouritesCtx.totalFavourites


  return(
    <header className={classes.header}>
      <div className={classes.logo}>LOGO</div>
       <nav>
         <ul>
           <li><Link to='/'>All meetups</Link></li>
           <li><Link to='/new-meetup'>Add new meetups</Link></li>
           <li><Link to='/favourites'>Favourites <span className={classes.badge}>{favouritesCount}</span></Link></li>
         </ul>
       </nav>
    </header>
  )
}

export default MainNavigation;
