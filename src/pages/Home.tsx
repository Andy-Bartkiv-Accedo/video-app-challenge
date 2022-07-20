import { useContext } from 'react';
import { MediaContext } from '../context';
import Swimlane from '../components/UI/swimlane/Swimlane';

const Home: React.FC = () => {

  const mediaLibrary: MediaItem[] = useContext(MediaContext);

  const getMediaItems = (type: string, qty: number): MediaItem[] => mediaLibrary
    .filter(item => item.type === type)  // only certain type (movie || tv)
    .sort(() => .5 - Math.random())      // sort in random order 
    .slice(0, qty);                      // keep first 5 items

  return (
    <div className="wrap-swimlanes">

        <Swimlane bookmark='Movies' items={ getMediaItems('movie', 10) } />

        <Swimlane bookmark='Series' items={ getMediaItems('tv', 10) } />

        <Swimlane bookmark='More Movies' items={ getMediaItems('movie', 15) } />

        <Swimlane bookmark='More Series' items={ getMediaItems('tv', 15) } />

    </div>
  )
}

export default Home