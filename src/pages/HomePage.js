import React, { Component } from "react";
import { Link } from "react-router-dom";
import moviesApi from "../services/moviesApi";
import { withRouter } from "react-router-dom";
import routes from "../routes";

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
    const { match } = this.props;

    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${routes.movies}/${movie.id}`,
                  state: { from: this.props.location }
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
