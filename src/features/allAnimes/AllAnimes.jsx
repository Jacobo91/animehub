import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, selectFilteredAllAnimes } from "./allAnimesSlice";
import CardItem  from '../../components/CardItem/CardItem';
import AddFavoriteButton from "../../components/buttons/AddFavoriteButton";



export default function AllAnimes(){

    const allAnimes = useSelector(selectFilteredAllAnimes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    return(
        <section className="all-animes" >
            <h2>All Animes</h2>
            <section className="gallery" >
                {
                    allAnimes.map(anime => (
                        <CardItem  anime={anime} key={anime._id}>
                            <AddFavoriteButton
                                anime={anime}
                            >
                                    <i className={`fa-regular fa-bookmark`}></i>
                            </AddFavoriteButton>
                        </CardItem>
                    ))
                }
            </section>
        </section>
    )
}