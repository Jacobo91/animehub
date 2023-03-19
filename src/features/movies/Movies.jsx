import { useSelector, useDispatch } from "react-redux";
import { selectFilteredMoviesByTerm } from "./moviesSlice";
import { useEffect } from 'react';
import { loadMovies } from "./moviesSlice";
import Gallery from "../../components/Gallery/Gallery";

export default function Movies(){

    const movies = useSelector(selectFilteredMoviesByTerm) /* array */
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMovies())
    }, [])

    return(
        <section className="all-animes" >
            <h2>Movies</h2>
            <Gallery
                array={movies}
            />
        </section>
    )
}

/*


            <article className="gallery" >
                {
                    movies.map(anime => (
                        <div className="card" key={anime.id} >
                            <img src={anime.image} alt={anime.name} className="card--img"/>
                            <div className="card--title"  >
                                <p>{anime.title}</p>
                                <p>{anime.type}</p>
                            </div>
                        </div>
                    ))
                    }
            </article>


 */