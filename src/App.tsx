import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import { getPopular } from "./service/tmdb-api";

const App = () => {

  const [listMovie, setListMovie] = useState([]);
  const [listTV, setListTV] = useState([]);

  const getList = async (type: string) => {
    // type = movie | tv | ...
    const res = await getPopular(type);
    if (type = 'movie')
      setListMovie(res)
    else if (type = 'tv')
      setListTV(res); 
    }
  
  useEffect( () => {
    getList('movie');
    getList('tv');
  }, []);

  return (
    <BrowserRouter>
      <div className="App">

        <Header />

        <AppRouter listMovie={ listMovie } listTV={ listTV } />
      
      </div>
    </BrowserRouter>
  )
}

export default App;
