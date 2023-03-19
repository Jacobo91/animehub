import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadSeries } from './seriesSlice';
import { selectFilteredSeriesByTerm } from './seriesSlice';
import Gallery from '../../components/Gallery/Gallery';

export default function Series(){

    const series = useSelector(selectFilteredSeriesByTerm) /* array */

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSeries())
    }, [])

    return(
        <section className="all-animes" >
            <h2>Series</h2>
            <Gallery
                array={series}
            />
        </section>
    )
}

