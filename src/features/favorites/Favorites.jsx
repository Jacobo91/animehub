import { useSelector } from 'react-redux';
import { filteredFavorites } from "./favoritesSlice";
import  CardItem  from '../../components/CardItem/CardItem';
import RemoveFavoriteButton from '../../components/buttons/RemoveFavoriteButton';


export default function Favorites(){

    const favorites = useSelector(filteredFavorites);

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