import { Outlet, NavLink } from 'react-router-dom';
import './Genres.css';
import { useState } from 'react';
import Hero from '../../components/Hero/Hero';


export default function Genres(){

    const [state, setState] = useState(false)

    function toggleState(){
        setState(true)
    }
    console.log(state)
    return(
        <main
            className='Genres-main'
        >
            <aside
                className='sidebar'
            >
                <div className='links-container' >
                    <NavLink to='action'  className={({isActive}) => isActive ? 'active-link' : 'no-active-link'} onClick={toggleState} >
                        Action
                    </NavLink>
                    <NavLink to='drama' className={({isActive}) => isActive ? 'active-link' : 'no-active-link'} onClick={toggleState} >
                        Drama
                    </NavLink>
                    <NavLink to='fantasy' className={({isActive}) => isActive ? 'active-link' : 'no-active-link'} onClick={toggleState} >
                        Fantasy
                    </NavLink>
                    <NavLink to='adventure' className={({isActive}) => isActive ? 'active-link' : 'no-active-link'} onClick={toggleState} >
                        Adventure
                    </NavLink>
                    <NavLink to='romance' className={({isActive}) => isActive ? 'active-link' : 'no-active-link'} onClick={toggleState} >
                        Romance
                    </NavLink>
                    <NavLink to='comedy' className={({isActive}) => isActive ? 'active-link' : 'no-active-link'} onClick={toggleState} >
                        Comedy
                    </NavLink>
                    <NavLink to='suspense' className={({isActive}) => isActive ? 'active-link' : 'no-active-link'} onClick={toggleState} >
                        Suspense
                    </NavLink>
                    <NavLink to='sci-fi' className={({isActive}) => isActive ? 'active-link' : 'no-active-link'}  onClick={toggleState} >
                        Sci-Fi
                    </NavLink>
                </div>
            </aside>
            <section
                className='display'
            >
                { state ? <Outlet/> : <Hero/> }
                
            </section>
        </main>
    )
}