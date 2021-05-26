import { React, useEffect, useState, useCallback } from "react";
import Header from "./component/Header";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navbar from "./component/Navbar";
import MovieList from "./component/MoviesList";
import Loader from "react-loader-spinner";
import { useLocation, useHistory } from "react-router-dom";

const App = () => {
  // eslint-disable-next-line
  let location = useLocation();
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);
  let history = useHistory();

  const fetchMovies = useCallback((location) => {
    fetch(
      `https://api.themoviedb.org/3${location}/all/week?api_key=f64c70cd7a57c5893c2c78f4f6bc9165&language=en-us`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setList(data.results);
      })
      .catch(() => {
        setLoader(false);
      });
  }, []);

  useEffect(() => {
    location.pathname === "/" && history.push("/trending");
    fetchMovies(location.pathname);
  }, [location, fetchMovies, history]);

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
