import { useEffect, useState } from "react";
import poster from "../static/placeholders/spiderman_no_way_home_poster.jpg";
import { getPopular } from "../service/tmdb-api";

interface MediaItem {
  id?: number,
  title?: string,
  overview?: string,
  releaseDate?: string,
  poster?: string,
  background?: string
}

const Details: React.FC<MediaItem> = () => {

  const handleClick = () => {
    console.log('CLICK');
  }

  return (
    <div className="details">

    {/* { (item)
      && <img style={{ width:'25vw', height: 'auto' }} src={`https://image.tmdb.org/t/p/original${item.poster}`} alt="Spiderman poster" />
    } */}
      <div className="details-poster">
        <img src={ poster } alt="Spiderman poster" />
      </div>
      <div className="details-description">
        <p className="year">2021</p>
        <p className="title">TITLE</p>
        <p className="short">Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</p>
        <div
          onClick={ handleClick } 
          className="btn-watch">Watch Trailer
        </div>
      </div>
    </div>
  )
}

export default Details