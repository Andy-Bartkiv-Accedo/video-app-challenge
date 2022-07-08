import { useContext } from 'react';
import { MediaContext } from '../context';
import Swimlane from '../components/UI/swimlane/Swimlane';

const Home: React.FC = () => {

  const mediaLibrary: any[] = useContext(MediaContext);

  const getMediaItems = (type: string, qty: number): any[] => mediaLibrary
    .filter(item => item.type === type)  // only certain type (movie || tv)
    .sort(() => .5 - Math.random())      // sort in random order 
    .slice(0, qty);                      // keep first 5 items

  return (
    <div className="wrap-swimlanes">

        <Swimlane bookmark='MOVIES' items={ getMediaItems('movie', 10) } />

        <Swimlane bookmark='SERIES' items={ getMediaItems('tv', 10) } />

    </div>
  )
}

export default Home