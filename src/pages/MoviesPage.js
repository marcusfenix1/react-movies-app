import React, { Component } from "react";
import getQueryParams from "../utils/getQueryParams";
import Searchmovie from "../components/Searchmovie";
import moviesApi from "../services/moviesApi";
import MoviesList from "../components/MoviesList";

export default class MoviesPage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = query => {
    moviesApi
      .fetchMoviesWithQuery(query)
      .then(movies => this.setState({ movies }));
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Searchmovie onSubmit={this.handleChangeQuery} />
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}
