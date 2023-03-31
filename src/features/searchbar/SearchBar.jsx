import { selectSearchTerm } from './searchTermSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from './searchTermSlice';
import { clearSearchTerm } from './searchTermSlice';

export default function SearchBar(){

    const searchTerm = useSelector(selectSearchTerm)
    const dispatch = useDispatch() 

    function handleOnChange(e){
        const term = e.target.value;
        dispatch(setSearchTerm(term))
    }

    function handleClearSearchTerm(){
        dispatch(clearSearchTerm())
    }

    return(
        <section className="searchbar" >
            <input 
                type="text"
                placeholder="Search anime by name..."
                className="searchinput"
                onChange={handleOnChange}
                value={searchTerm}
            />
            {searchTerm && (
            <button
                className="celarSearchInput-btn"
                onClick={handleClearSearchTerm}
            >
                <i className="fa-solid fa-x"></i>
            </button>
            )}
        </section>
    )
}