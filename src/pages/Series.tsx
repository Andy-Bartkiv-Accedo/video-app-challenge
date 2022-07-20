import { useContext } from 'react';
import { MediaContext } from '../context';
import Carousel from '../components/UI/carousel/Carousel';

const Series = () => {

  const mediaLibrary: MediaItem[] = useContext(MediaContext);

  const getMediaItems = (type: string, qty: number): MediaItem[] => 
    mediaLibrary
    .filter(item => item.type === type)  // only certain type (movie || tv)
    .sort(() => .5 - Math.random())      // sort in random order 
    .slice(0, qty);                      // keep first 5 items

  return (
      <Carousel items = { getMediaItems('tv', 6) }/>
  )
}

export default Series