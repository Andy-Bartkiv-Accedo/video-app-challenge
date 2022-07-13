import { useContext } from 'react';
import { MediaContext } from '../context';
import Carousel from '../components/UI/carousel/Carousel';

const Movies = () => {
  
  const mediaLibrary: MediaItem[] = useContext(MediaContext);

  const getMediaItems = (type: string, qty: number): any[] => mediaLibrary
    .filter(item => item.type === type)  // only certain type (movie || tv)
    .sort(() => .5 - Math.random())      // sort in random order 
    .slice(0, qty);                      // keep first 5 items                     // keep first 5 items

  return (

    <div className="carousel">

      <Carousel items = { getMediaItems('movie', 6) }/>

    </div>
  )
}

export default Movies