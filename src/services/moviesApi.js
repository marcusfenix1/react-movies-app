import axios from "axios";

const apiKey = "628d6a5d740bdc44977e233b871867be";
const baseUrl = "https://api.themoviedb.org/3/";

const fetchMovieDetails = async movieId => {
  const requestParams = `movie/${movieId}?api_key=${apiKey}`;
  try {
    const response = await axios.get(baseUrl + requestParams);
    const data = response.data;
    return data;
  } catch (error) {
    return console.log(error);
  }
};

const fetchMoviesWithQuery = searchQuery => {
  const requestParams = `search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

  return axios
    .get(baseUrl + requestParams)
    .then(response => response.data.results);
};

const fetchTrendingMovies = () => {
  const requestParams = `trending/movie/day?api_key=${apiKey}`;
  return axios
    .get(baseUrl + requestParams)
    .then(response => response.data.results);
};

const fetchCastInfo = movieId => {
  const requestParams = `movie/${movieId}/credits?api_key=${apiKey}`;

  return axios
    .get(baseUrl + requestParams)
    .then(response => response.data.cast);
};

const fetchReviews = async movieId => {
  const requestParams = `movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`;
  try {
    const response = await axios.get(baseUrl + requestParams);
    const data = response.data.results;
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export default {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchCastInfo,
  fetchReviews,
  fetchMoviesWithQuery
};
