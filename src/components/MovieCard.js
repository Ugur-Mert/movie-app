import React from "react";
import { Link } from "react-router-dom";
import MoviePage from "./MoviePage";

export default function MovieCard(props) {
  const [click, setClick] = React.useState(false);
  function cardDetail() {
    setClick((prevValue) => !prevValue);
    console.log(click);
    console.log(props.id);
  }

  return (
    <div className="movie-cards">
      <div onClick={cardDetail} className="movie-card">
        <h3 className="movie-title">{props.title}</h3>
        <img className="movie-img" src={props.poster} alt="poster" />
        <p className="movie-overview">{props.overview.slice(0, 120) + "..."}</p>

        <Link
          className="link"
          to={`/movie/${props.id}`}
          element={<MoviePage />}
          key={props.id}
        >
          <button variant="outlined">View More</button>
        </Link>

        <div className="card-detail">
          <p>Release Date: {props.release}</p>
          <p>Rate: {props.vote}</p>
        </div>
      </div>
    </div>
  );
}
