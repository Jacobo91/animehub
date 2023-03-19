import Gallery from "../../components/Gallery/Gallery";
import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites } from "./favoritesSlice";
import { removeFavorite } from "./favoritesSlice";
import { filteredFavorites } from "./favoritesSlice";

export default function Favorites(){

    const favorites = useSelector(filteredFavorites);
    const dispatch = useDispatch()

    function handleRemove(anime){
        dispatch(removeFavorite(anime))
    }

    return(
        <section className="series" >
            <h2>Favorites</h2>
            <article className="gallery" >
                {
                    favorites.map(anime => (
                        <div className="card" key={anime._id} >
                            <button
                                className="bookmark-btn"
                                onClick={() => handleRemove(anime)}
                            >
                                <i className="fa-solid fa-x"></i>
                            </button>
                            <img src={anime.image} alt={anime.name} className="card--img" />
                            <div className="card--title"  >
                                <p>{anime.title}</p>
                                <p>{anime.type}</p>
                            </div>
                        </div>
                    ))
                }
            </article>
        </section>
    )
}