import React from "react";
import { Link } from "react-router-dom";
export default function MovieCard(props) {
  const [click, setClick] = React.useState(false);

  function cardDetail() {
    setClick((prevValue) => !prevValue);
    console.log(click);
    if (click === true) {
    }
  }

  return (
    <div onClick={cardDetail} className="movie-card">
      <Link className="link" to="/moviepage">
        <h3 className="movie-title">{props.title}</h3>
        <img className="movie-img" src={props.poster} alt="poster" />
        <p className="movie-overview">{props.overview.slice(0, 140) + "..."}</p>
        <div className="card-detail">
          <p>Release Date: {props.release}</p>
          <p>Rate: {props.vote}</p>
        </div>
      </Link>
    </div>
  );
}
