import React from "react";

export default function MovieCard(props) {
  return (
    <div className="movie-card">
      <h3>{props.title}</h3>
      <img className="movie-img" src={props.poster} />
      <p className="movie-overview">{props.overview}</p>
      <p>{props.release}</p>
      <p>{props.vote}</p>
    </div>
  );
}
