import { React, useEffect, useState, useCallback } from "react";
import Header from "./component/Header";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navbar from "./component/Navbar";
import MovieList from "./component/MoviesList";
import Loader from "react-loader-spinner";
import { useLocation, useHistory } from "react-router-dom";

const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // eslint-disable-next-line
  let location = useLocation();
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);
  let history = useHistory();

  const fetchMovies = useCallback((api) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setList(data.results);
      })
      .catch(() => {
        setLoader(false);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let api = "";
    location.pathname === "/" && history.push("/trending");

    switch (location.pathname) {
      case "/trending":
        api = `${API_BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`;
        break;
      case "/action":
        api = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`;
        break;
      case "/top_rated":
        api = `${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`;
        break;
      case "/comedy":
        api = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`;
        break;
      case "/horror":
        api = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`;
        break;
      case "/romance":
        api = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`;
        break;
      case "/mystery":
        api = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648`;
        break;
      case "/sci_fi":
        api = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`;
        break;

      case "/western":
        api = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=37`;
        break;
      case "/animation":
        api = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`;
        break;
      case "/tv_movie":
        api = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10770`;
        break;

      default:
        break;
    }

    fetchMovies(api);
  }, [location, fetchMovies, history, API_BASE_URL, API_KEY]);

  return (
    <div className="bg-body text-gray-100 h-full ">
      {loader && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={50}
          width={50}
          className="loader"
        />
      )}

      <Header />
      <Navbar />
      <MovieList list={list} />
    </div>
  );
};

export default App;
