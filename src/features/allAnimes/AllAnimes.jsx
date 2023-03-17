import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "./allAnimesSlice";
import { selectFilteredAllAnimes } from "./allAnimesSlice";

export default function AllAnimes(){

    const allAnimes = useSelector(selectFilteredAllAnimes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadData())
    }, [])

    return(
        <section className="all-animes" >
            <h2>All Animes</h2>
            <article className="gallery" >
                {
                    allAnimes.map(anime => (
                        <div className="card" key={anime.id} >
                            <img src={anime.image} alt={anime.name} className="card--img"/>
                            <p className="card--title" >{anime.title}</p>
                        </div>
                    ))
                }
            </article>
        </section>
    )
}