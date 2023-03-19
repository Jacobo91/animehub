import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "./allAnimesSlice";
import { selectFilteredAllAnimes } from "./allAnimesSlice";
import Gallery from "../../components/Gallery/Gallery";

export default function AllAnimes(){

    const allAnimes = useSelector(selectFilteredAllAnimes);   /* array */
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadData())
    })

    return(
        <section className="all-animes" >
            <h2>All Animes</h2>
            <Gallery
                array={allAnimes}
            />
        </section>
    )
}