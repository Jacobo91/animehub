import { Outlet, Link } from 'react-router-dom';
import './Genres.css';


export default function Genres(){
    return(
        <main>
            <aside
                className='sidebar'
            >
                <div className='links-container' >
                    <Link>
                        Action
                    </Link>
                    <Link>
                        Drama
                    </Link>
                    <Link>
                        Fantasy
                    </Link>
                    <Link>
                        Adventure
                    </Link>
                    <Link>
                        Romance
                    </Link>
                    <Link>
                        Comedy
                    </Link>
                    <Link>
                        Suspense
                    </Link>
                    <Link>
                        Sci-Fi
                    </Link>
                </div>
            </aside>
            <Outlet/>
        </main>
    )
}