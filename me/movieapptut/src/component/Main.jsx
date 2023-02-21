import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";
import "./main.css";
let navBars = ["Popular", "Theater", "Kids", "Drama", "Comedy"];

let API_Key = "&api_key=c941bf03a7e74ca52e1618675459ee8c";
let base_url = "https://api.themoviedb.org/3";

let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_Key;

export default function Main() {
  const [movieData, setMovieData] = useState([]);
  const [url_set, SetUrl_set] = useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results);
      });
  }, [url_set]);

  const searchMovie = (evt) => {
    const jim = search.trim().length === 0 ? "war" : search;
    if (evt.key == "Enter") {
      url =
        base_url +
        "/search/movie?api_key=c941bf03a7e74ca52e1618675459ee8c&query=" +
        jim;
      SetUrl_set(url);
      setSearch("");
    }
  };

  const setData = (movieType) => {
    if (movieType === "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_Key;
    }
    if (movieType === "Theater") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_Key;
    }
    if (movieType === "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_Key;
    }
    if (movieType === "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10" +
        API_Key;
    }
    if (movieType === "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_Key;
    }

    SetUrl_set(url);
  };
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            {navBars.map((nav, index) => [
              <li key={index}>
                <a
                  href="#"
                  name={nav}
                  onClick={(e) => {
                    setData(e.target.name);
                  }}
                >
                  {nav}
                </a>
              </li>,
            ])}
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="inputText"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyPress={searchMovie}
            ></input>
            <button>
              <AiOutlineSearch />
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {movieData.length == 0 ? (
          <p className="notfound">Not Found</p>
        ) : (
          movieData.map((movie, index) => <Card info={movie} key={index} />)
        )}
      </div>
    </>
  );
}
