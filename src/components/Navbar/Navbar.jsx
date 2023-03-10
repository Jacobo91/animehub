import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className='navbar' >
            <div className="search-section">
                <span className='navbar--logo'>
                    Anime<span className='navbar--highlight' >Hub</span>
                </span>
                <input 
                    type="text"
                    className='navbar--searchinput'
                    placeholder='Search by name...'
                />
            </div>
            <ul className='navbar--ul' >
                <li>
                    <NavLink
                        to='/'
                        className={({isActive})=> isActive ? 'active': 'inActive'}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/genres'
                        className={({isActive})=> isActive ? 'active': 'inActive'}
                    >
                        Genres
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}