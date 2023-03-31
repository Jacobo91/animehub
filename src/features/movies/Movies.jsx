import { useSelector } from "react-redux";
import { selectFilteredMoviesByTerm } from "./moviesSlice";
import CardItem from '../../components/CardItem/CardItem';
import AddFavoriteButton from "../../components/buttons/AddFavoriteButton";


export default function Movies(){

    const movies = useSelector(selectFilteredMoviesByTerm) /* array */

    return(
        <section className="all-animes" >
            <h2>Movies</h2>
            <section className="gallery" >
                {
                    movies.map(anime => (
                        <CardItem  anime={anime}>
                            <AddFavoriteButton anime={anime}>
                                <i className={`fa-regular fa-bookmark`}></i>
                            </AddFavoriteButton>
                        </CardItem>
                    ))
                }
            </section>
        </section>
    )
}
