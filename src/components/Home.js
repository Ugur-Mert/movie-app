import React from "react";
import MovieCard from "./MovieCard";

import Navbar from "./Navbar";
export default function Home() {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(function () {
    async function getMovies() {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=2a44187108faf157fdf6e2d6e3c6096a"
      );
      const data = await res.json();
      setMovie(data.results);
    }
    getMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="movie">
        {movie.map((movie, id) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
              overview={movie.overview}
              release={movie.release_date}
              vote={movie.vote_average}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
}
