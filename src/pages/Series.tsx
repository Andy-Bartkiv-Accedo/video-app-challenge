import { useContext } from 'react';
import { MediaContext } from '../context';
import Random5Posters from '../components/Random5Posters';
import carousel_001 from "../static/placeholders/carousel_001.png";


const Series = () => {

  const mediaLibrary: any[] = useContext(MediaContext);
  const listSeries = mediaLibrary.filter(item => item.type === 'tv');
  
  return (
    <div className="carousel">

      <img  
          src={carousel_001} 
          alt="carousel placeholder"
          onClick = { () => console.log('Oops!') }
        />

      <Random5Posters list={ listSeries }/>

    </div>
  )
}

export default Series