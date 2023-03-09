import './App.css';
import Homepage from './pages/homepage/Homepage';
import Genres from './pages/genres/Genres';
import Navbar from './components/Navbar/Navbar';
import AnimeInfo from './components/AnimeInfo/AnimeInfo';
import getData from './utils/getData';
import {
  Routes,
  Route
} from 'react-router-dom';
import { 
  useEffect, 
  useState } from 'react';


function App() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    getData().then(results => setResults(results))
  }, [])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage data={results} />} />
        <Route path='/:title' element={<AnimeInfo data={results} />} />
        <Route  path='/genres' element={<Genres/>}/>
      </Routes>
    </>
  );
}

export default App;
