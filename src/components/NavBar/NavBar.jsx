import { NavLink } from 'react-router-dom';


export default function NavBar(){
    return(
        <nav>
            <span className='logo'>Anime<span className='highlight'>Hub</span></span>
            <ul>
                <li>
                    <NavLink
                        to='/'
                        className={({isActive}) => isActive ? "active" : "inactive"}
                    >
                        <i className="fa-solid fa-house"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/series'
                    >
                        <i className="fa-solid fa-tv"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/movies'
                    >
                        <i className="fa-solid fa-film"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='favorites'
                    >
                        <i className="fa-solid fa-bookmark"></i>
                    </NavLink>
                </li>
            </ul>
            <button>Profile</button>
        </nav>
    )
} 