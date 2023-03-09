import './Gallery.css';
import { Link } from 'react-router-dom';

export default function Gallery(props){
    return(
        <section
            className='gallery-wrapper'
        >

            <h2 style={{textAlign: 'center'}} >Popular</h2>
            <article
                className='gallery'
            >
                {
                    props.data.map(element => (
                        <Link
                            key={element._id}
                            to={`/${element.title}`}
                        >
                            <article className='card' >
                                <div className="image-wrapper">
                                    <img
                                        src={element.image}
                                        alt={element.title}
                                        className='card--img'
                                    />
                                </div>
                                <p
                                    className='card--text'
                                >
                                    {element.title}
                                </p>
                            </article>
                        </Link>
                    ))
                }
            </article>

        </section>
    )
}