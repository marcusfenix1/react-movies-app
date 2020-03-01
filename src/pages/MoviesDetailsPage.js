import React, { Component } from "react";
import { Link } from "react-router-dom";
import moviesApi from "../services/moviesApi";
import routes from "../routes";

export default class MoviesDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    moviesApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.movies);
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go Back
        </button>

        <br />

        <img
          src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}
          alt={this.state.movie.original_title}
        />
        <h1>{this.state.show.name}</h1>
      </>
    );
  }
}
