import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import { getPopular } from "./service/tmdb-api";
import { MediaContext } from './context';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './redux/store';
import { addMedia } from './redux/mediaSlice';

const App = () => {

  const [mediaLibrary, setMediaLibrary] = useState<MediaItem[]>([]);

  const dispatch = useDispatch();
  const lib:MediaItem[] = useSelector((state: RootState) => state.library.library);

  const getAllMedia = async () => {
    const movies = await getPopular('movie');
    const tvs = await getPopular('tv');
    setMediaLibrary([...movies, ...tvs]);
    dispatch(addMedia([...movies, ...tvs]));
    }
  
  useEffect( () => { getAllMedia() }, []);
  
  useEffect( () => console.log(lib), [lib]);

  return (
    <MediaContext.Provider value={ mediaLibrary }>
      <BrowserRouter>
        <div className="App">

          <Header />

          <AppRouter />
        
        </div>
      </BrowserRouter>
    </MediaContext.Provider>
  )
}

export default App;
