import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from "./favoritesSlice";
import { filteredFavorites } from "./favoritesSlice";
import  CardItem  from '../../components/CardItem/CardItem';
import RemoveFavoriteButton from '../../components/buttons/RemoveFavoriteButton';


export default function Favorites(){

    const favorites = useSelector(filteredFavorites);
    const dispatch = useDispatch();

    function handleRemove(anime){
        dispatch(removeFavorite(anime))
    }

    return(
        <section className="series" >
            <h2>Favorites</h2>
            <section className="gallery" >
                {
                    favorites.map(anime => (
                        <CardItem  anime={anime}>
                            <RemoveFavoriteButton anime={anime}>
                                <i className={`fa-solid fa-x`}></i>
                            </RemoveFavoriteButton>
                        </CardItem>
                    ))
                }
            </section>
        </section>
    )
}