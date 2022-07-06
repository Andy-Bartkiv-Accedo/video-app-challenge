import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import { getPopular } from "./service/tmdb-api";
import { MediaContext } from './context';

const App = () => {

  const [mediaLibrary, setMediaLibrary] = useState<any[]>([]);

  const getAllMedia = async () => {
    const movies = await getPopular('movie');
    const tvs = await getPopular('tv');
    setMediaLibrary([...movies, ...tvs]);
    }
  
  useEffect( () => { getAllMedia() }, []);

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
