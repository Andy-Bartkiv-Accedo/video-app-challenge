import poster from "../static/placeholders/spiderman_no_way_home_poster.jpg"

const Details = () => {
  return (
    <div className="details">
      <div className="details-poster">
        <img src={poster} alt="Spiderman poster" />
      </div>
      <div className="details-description">
        <div className="year">2021</div>
        <div className="title">Spider-Man: No Way Home</div>
        <div className="short">Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</div>
        <div className="btn-watch">Watch Trailer</div>
      </div>
    </div>
  )
}

export default Details