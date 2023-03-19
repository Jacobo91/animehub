import { addFavorite } from "../../features/favorites/favoritesSlice";
import { useDispatch } from 'react-redux';
import { selectFavorites } from "../../features/favorites/favoritesSlice";

export default function Gallery(props){

    const dispatch = useDispatch();

    function handleAddFavorite(anime){
        dispatch(addFavorite(anime))
    }

    return(
        <article className="gallery" >
            {
                    props.array.map(anime => (
                    <div className="card" key={anime._id} >
                        <button 
                            className="bookmark-btn"
                            onClick={() => handleAddFavorite(anime)}
                        >
                            <i className={`fa-regular fa-bookmark`}></i>
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
    )
}