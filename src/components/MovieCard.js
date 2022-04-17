import React from "react";

export default function MovieCard(props) {
  return (
    <div className="movie-card">
      <h3 className="movie-title">{props.title}</h3>
      <img className="movie-img" src={props.poster} />
      <p className="movie-overview">{props.overview.slice(0, 140) + "..."}</p>
      <div className="card-detail">
        <p>Release Date: {props.release}</p>
        <p>Rate: {props.vote}</p>
      </div>
    </div>
  );
}
