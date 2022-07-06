import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MediaContext } from '../context';

interface MediaItem {
  id?: number,
  title?: string,
  overview?: string,
  releaseDate?: string,
  poster?: string,
  background?: string
}

const Details: React.FC = () => {

  const mediaLibrary: any[] = useContext(MediaContext);

  const itemID: number = Number(useParams().id);
  const item = mediaLibrary.find(el => el.id === itemID);

  const handleClick = () => {
    console.log('CLICK', item);
  }

  return (
    <div className="details">

      <div className="details-poster">
        <img src={ `https://image.tmdb.org/t/p/original${item.poster}` } alt="Poster" />
      </div>

      <div className="details-description">
        <p className="year">{ item.releaseDate.slice(0, 4) }</p>
        <p className="title">{ item.title }</p>
        <p className="short">{ item.overview }</p>
        <div className="btn-watch"
          onClick={ handleClick } 
          >Watch Trailer
        </div>
      </div>

    </div>
  )
}

export default Details