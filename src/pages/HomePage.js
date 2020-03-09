import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import MoviesList from "../components/MoviesList";

export default class HomePage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    moviesApi.fetchTrendingMovies().then(movies => this.setState({ movies }));
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </>
    );
  }
}
