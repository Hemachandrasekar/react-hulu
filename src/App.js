import { React, useEffect, useState } from "react";
import Header from "./component/Header";
import "./App.css";
import Navbar from "./component/Navbar";
import MovieList from "./component/MoviesList";
import { useLocation } from "react-router-dom";

const App = () => {
  // eslint-disable-next-line
  let location = useLocation();
  const [list, setList] = useState([]);

  const fetchMovies = (location) => {
    console.log("location value", location);

    if (location === null) {
    } else {
      location = "/trending";
    }
    fetch(
      `https://api.themoviedb.org/3${location}/all/week?api_key=f64c70cd7a57c5893c2c78f4f6bc9165&language=en-us`
    )
      .then((res) => res.json())
      .then((data) => {
        setList(data.results);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    fetchMovies(location.pathname);
  }, [location]);

  return (
    <div className="bg-body text-gray-100 h-full ">
      <Header />
      <Navbar />
      <MovieList list={list} />
    </div>
  );
};

export default App;
