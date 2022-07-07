// import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MediaContext } from '../context';
import Swimlane from '../components/UI/swimlane/Swimlane';

const Home: React.FC = () => {

  const mediaLibrary: any[] = useContext(MediaContext);
  const listMovies = mediaLibrary.filter(item => item.type === 'movie');
  const listSeries = mediaLibrary.filter(item => item.type === 'tv');

  // const navigate = useNavigate();

  return (
    <div className="wrap-swimlanes">

        <Swimlane bookmark='MOVIES' list={ listMovies } />

        <Swimlane bookmark='SERIES' list={ listSeries } />

    </div>
)
}

export default Home