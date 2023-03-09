import './Genre.css';
import { useParams } from 'react-router-dom';
import { useData } from '../../App';
import Gallery from '../Gallery/Gallery';

export default function Genre(){

    const { bygenre } = useParams();

    const { data } = useData()
    const animesFiltered = data.filter(({genres}) => genres.map(gen => gen.toLowerCase()).includes(bygenre)
    )

    return(
        <>
            <h1 
            style={{ 
                textAlign: 'center', 
                paddingTop: '1rem'
            }} 
            >
                {bygenre.charAt(0).toUpperCase()+bygenre.slice(1)}
            </h1>
            <section
                    className='gallery'
                >
            {animesFiltered.length ? animesFiltered.map(anime => <>

                    
                    <article
                        className='card'
                    >
                        <div className="image-wrapper">
                            <img
                                src={anime.image}
                                alt={anime.title}
                                className='card--img'
                            />
                        </div>
                        <p
                            className='card--text'
                        >
                            {anime.title}
                        </p>
                    </article>
                
            </>) : <h1>There aren't animes in {bygenre} </h1>}
            </section>
        </>
    )
}

/**
 * 
 *             <h1>{bygenre}</h1>
            {animesFiltered.length ? animesFiltered.map(anime => <>
                <section>
                    <h3>{anime.title}</h3>
                </section>
                <br />
            </>) : <h1>There aren't animes in {bygenre} </h1>}
 */