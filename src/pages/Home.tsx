import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MediaContext } from '../context';
import carousel_001 from "../static/placeholders/carousel_001.png";
import Random5List from './Random5List';

const Home: React.FC = () => {

  const mediaLibrary: any[] = useContext(MediaContext);

  const navigate = useNavigate();

  return (
    <div className="carousel">
        <img  
          src={carousel_001} 
          alt="carousel placeholder"
          onClick = { () => console.log('Oops!') }
        />

        <div style={{ margin: '10vh 45% ' }}>Swimlane (BONUS):</div>


        {/* <Random5List list={ mediaLibrary }/> */}

    </div>
)
}

export default Home