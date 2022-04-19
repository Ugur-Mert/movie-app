import React from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const params = useParams();
  const [singleMovie, setSingleMovie] = React.useState([]);
  const url = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=2a44187108faf157fdf6e2d6e3c6096a`;
  React.useEffect(function () {
    async function getMovies() {
      const res = await fetch(url);
      const data = await res.json();
      setSingleMovie(data);
    }
    getMovies();
  }, []);
  console.log(singleMovie.id);
  return (
    <div>
      <h1>{singleMovie.original_title}</h1>
    </div>
  );
}
