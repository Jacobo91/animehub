import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../features/searchbar/SearchBar";
import Series from "../features/series/Series";
import Movies from "../features/movies/Movies";
import Favorites from '../features/favorites/Favorites';
import { Routes, Route } from "react-router-dom";
import AllAnimes from '../features/allAnimes/AllAnimes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<AllAnimes/>}/>
        <Route path="/series" element={<Series/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </div>
  );
}

export default App;
