import { useSelector } from 'react-redux';
import CardItem from '../../components/CardItem/CardItem';
import { selectFilteredSeriesByTerm } from './seriesSlice';
import AddFavoriteButton from '../../components/buttons/AddFavoriteButton';

export default function Series(){

    const series = useSelector(selectFilteredSeriesByTerm) /* array */

    return(
        <section className="all-animes" >
            <h2>Series</h2>
            <section className="gallery" >
                {
                    series.map(anime => (
                        <CardItem  anime={anime} key={anime._id}>
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

