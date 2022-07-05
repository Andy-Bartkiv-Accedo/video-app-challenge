import { useNavigate } from 'react-router-dom'; 
import carousel_001 from "../static/placeholders/carousel_001.png";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="carousel">
        <img
          src={carousel_001} 
          alt="carousel placeholder"
          onClick = { () => navigate('/details/123') }
        />
    </div>
)
}

export default Home