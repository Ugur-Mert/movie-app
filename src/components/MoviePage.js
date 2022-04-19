import React from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const params = useParams();
  const [singleMovie, setSingleMovie] = React.useState([]);
  const url = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=2a44187108faf157fdf6e2d6e3c6096a`;
  React.useEffect(
    function () {
      async function getMovies() {
        const res = await fetch(url);
        const data = await res.json();
        setSingleMovie(data);
      }
      getMovies();
    },
    [url]
  );
  console.log(singleMovie.id);
  return (
    <div className="movie-page">
      <img
        className="mp-poster"
        src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
        alt="singlePoster"
      />
      <div className="mp-info">
        <h1>{singleMovie.original_title}</h1>
        <h3>{singleMovie.tagline}</h3>
        <p>{singleMovie.overview}</p>
        <div className="mp-details">
          <p>Original Language: {singleMovie.original_language}</p>
          <p>Vote: {singleMovie.vote_average}</p>
          <p>Release Date: {singleMovie.release_date}</p>
          <p>Status: {singleMovie.status}</p>
          <p>Revenue: {singleMovie.revenue} $ </p>
        </div>
      </div>
    </div>
  );
}
