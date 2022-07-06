import { useNavigate } from 'react-router-dom'; 
import carousel_001 from "../static/placeholders/carousel_001.png";
import Random5List from './Random5List';

interface Props {
  listMovie: any[],
  listTV: any[]
}

const Home: React.FC<Props> = ({ listMovie, listTV }) => {

  const navigate = useNavigate();

  return (
    <div className="carousel">
        <img
          src={carousel_001} 
          alt="carousel placeholder"
          onClick = { () => navigate('/details/123') }
        />

        <Random5List list={ listMovie }/>

    </div>
)
}

export default Home