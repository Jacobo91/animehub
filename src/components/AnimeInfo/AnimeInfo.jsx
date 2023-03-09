import './AnimeInfo.css';
import { useParams } from 'react-router-dom';

export default function AnimeInfo({data}){

    const { title } = useParams();
    const anime = data.find(obj => obj.title === title);  
    return(
        <section
            className='anime-information'
        >
            <h1 className='anime-title' >{anime.title}</h1>
            <article className='anime-info-wrapper' >
                <div className='anime-info-img-wrapper' >
                    <img src={anime.image} alt=""  className='anime-cover' />
                </div>
                <div className='anime-info-text' >
                    <div className='anime-info-description' >
                        {anime.genres.map(genre => (<p>{genre}</p>))}
                        <span>{anime.type}</span>
                    </div>
                    <div className='anime-info-text'>
                        <h3 className='synopsis-title' >Synopsis</h3>
                        {anime.synopsis ? <p>
                            {anime.synopsis}
                        </p> : "No synopsis available"}
                    </div>
                </div>
            </article>
        </section>
    )
}

