import './App.css';
import Homepage from './pages/homepage/Homepage';
import Genres from './pages/genres/Genres';
import Navbar from './components/Navbar/Navbar';
import AnimeInfo from './components/AnimeInfo/AnimeInfo';
import Genre from './components/Genre/Genre';
import Error from './pages/error/Error';
import getData from './utils/getData';
import {
  Routes,
  Route
} from 'react-router-dom';
import { 
  useContext,
  useEffect, 
  useState,
  createContext } from 'react';


const dataContext = createContext(null)
export const useData = () => useContext(dataContext)

function App() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    getData().then(results => setResults(results))
  }, [])

  return (
    <>
      <Navbar/>
      <dataContext.Provider value={{data: results}}>
        <Routes>
          <Route path='/' element={<Homepage  />} />
          <Route path='/:title' element={<AnimeInfo data={results} />} />
          <Route  path='/genres' element={<Genres/>}>
              <Route path=':bygenre' element={<Genre/>}/>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </dataContext.Provider>
    </>
  );
}

export default App;


/*data={results}*/