import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import SearchMovie from "./SearchMovie";


import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();
  const toggle = useSelector((store) => store.movie.toggle);

  //custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Header />
      <div>
        {
          toggle ? ( <SearchMovie /> ) : 
          (
            <>
              <MainContainer />
              <MovieContainer />
            </>
          )
        }
      </div>
    </div>
  );
};

export default Browse;
