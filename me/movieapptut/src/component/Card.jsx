import React from "react";
import "./main.css";

export default function Card({ info }) {
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <div className="movie">
        <img src={img_path + info.poster_path} alt="" className="poster" />
        <div className="movie-details">
          <div className="box">
            <h4 className="title">{info.title}</h4>
            <p className="rating">{info.vote_average}</p>
          </div>
          <div className="overview">
            <h1>Overview</h1>
            {info.overview}
          </div>
        </div>
      </div>
    </div>
  );
}
