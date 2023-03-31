
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../features/favorites/favoritesSlice";



export default function RemoveFavoriteButton({ anime, children }){

    const dispatch = useDispatch();

    function handleRemoveFavorite(anime){
        dispatch(removeFavorite(anime))
    };
    console.log(anime)
    return(
        <button
            className="bookmark-btn"
            onClick={() => handleRemoveFavorite(anime)}
        >
            {children}
        </button>
    )
}

/*

<i className={`fa-regular fa-bookmark`}></i>
*/