export const API_END_POINT = "http://localhost:8080/api/v1/user";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTI5Njg5NjZjOGNlNjUwYzA2MWJhMDk1YWMyOThjYyIsIm5iZiI6MTczMTQwNjI5OC4wNzQ1MjMsInN1YiI6IjY3MzMyODA3MDQwNTRkMzFkNGFjZWJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._WfPB2ewb6RYqBbBkxVLSmUL56gA5-7Us_XkPGJT1RU",
  },
};
export const NOW_PLAYING_MOVIES ="https://api.themoviedb.org/3/movie/now_playing";
export const POPULAR_MOVIES ="https://api.themoviedb.org/3/movie/popular";
export const TOP_RATED_MOVIES ="https://api.themoviedb.org/3/movie/top_rated";
export const UPCOMING_MOVIES ="https://api.themoviedb.org/3/movie/upcoming";

export const TMDB_IMG_URL ="https://image.tmdb.org/t/p/w500";

export const SEARCH_MOVIE_URL ="https://api.themoviedb.org/3/search/movie?query=";