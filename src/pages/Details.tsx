import poster from "../static/placeholders/spiderman_no_way_home_poster.jpg";

import { getPopular } from "../service/tmdb-api";

const Details: React.FC = () => {

  const logPopular = async (type: string) => {
    // type = movie | string | ...
    const res = await getPopular(type);
    console.log('hello Disney', res)
  }

  return (
    <div className="details">
      <div className="details-poster">
        <img src={poster} alt="Spiderman poster" />
      </div>
      <div className="details-description">
        <p className="year">2021</p>
        <p className="title">Spider-Man: No Way Home</p>
        <p className="short">Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</p>
        <div
          onClick={ () => logPopular('movie') } 
          className="btn-watch">Watch Trailer
        </div>
      </div>
    </div>
  )
}

export default Details