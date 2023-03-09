import './Gallery.css';
import { Link } from 'react-router-dom';
import { useData } from '../../App';

export default function Gallery(){

    const { data } = useData();

    return(
        <section
            className='gallery-wrapper'
        >
            <h2 style={{textAlign: 'center'}} >Popular</h2>
            <article
                className='gallery'
            >
                {
                    data.map(anime =>(
                        <Link
                        key={anime._id}
                        to={`/${anime.title}`}
                    >
                        <article className='card' >
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
                    </Link>
                    ))
                }
            </article>

        </section>
    )
}

