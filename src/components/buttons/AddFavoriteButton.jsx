import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../features/favorites/favoritesSlice";



export default function AddFavoriteButton({ anime, children }){


    const dispatch = useDispatch();

    function handleAddFavorite(anime){
        dispatch(addFavorite(anime))
    };

    console.log(anime)
    return(
        <button
            className="bookmark-btn"
            onClick={() => handleAddFavorite(anime)}
        >
            {children}
        </button>
    )
}

