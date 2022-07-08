import { useContext } from 'react';
import { MediaContext } from '../context';
import Carousel from '../components/UI/carousel/Carousel';

const Movies = () => {
  
  const mediaLibrary: any[] = useContext(MediaContext);
  const listMovies = mediaLibrary
    .filter(item => item.type === 'movie')  // only movies
    .sort(() => .5 - Math.random())         // sort in random order 
    .slice(0, 6);                           // keep first 5 items

  console.log(listMovies);

  return (

    <div className="carousel">

      <Carousel items = { listMovies }/>

    </div>
  )
}

export default Movies