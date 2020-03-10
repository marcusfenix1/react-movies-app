import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import moviesApi from "../services/moviesApi";
import routes from "../routes";
import styled from "styled-components";
import CastWithRouter from "../components/Cast";
import ReviewsWithRouter from "../components/Reviews";
import MovieAdditionalInfo from "../components/MovieAdditionalInfo";

const StyledButton = styled.button`
  border: solid 3px;
  border-radius: 9px;
  border-color: gray;
  background-color: darkgray;
  display: block;
  width: 100px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  margin-bottom: 30px;

  &:hover {
    color: royalblue;
  }
`;

const StyledMoviePoster = styled.img`
  max-width: 200px;
`;

const StyledGenreText = styled.span`
  margin-left: 15px;
`;

const StyledOveriewText = styled.span`
  display: block;
  margin-bottom: 30px;
`;

export default class MoviesDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    moviesApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then(movieDetails => this.setState({ movie: movieDetails }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.home);
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <>
        <StyledButton type="button" onClick={this.handleGoBack}>
          Go Back
        </StyledButton>

        {movie !== null && (
          <>
            {movie.poster_path ? (
              <StyledMoviePoster
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.original_title}
              />
            ) : (
              <StyledMoviePoster
                src="https://via.placeholder.com/200x300.png"
                alt={movie.original_title}
              />
            )}
            <div>
              <h1>{movie.original_title}</h1>
              <span>User score: {movie.vote_average}</span>
              <h2>Overview:</h2>
              <StyledOveriewText>{movie.overview}</StyledOveriewText>
              <h3>Genres</h3>
              <div>
                {movie.genres.map(genre => (
                  <StyledGenreText key={genre.id}>
                    #{genre.name}
                  </StyledGenreText>
                ))}
              </div>
            </div>
            <MovieAdditionalInfo />

            <Switch>
              <Route
                path={`${match.path}/reviews`}
                exact
                component={ReviewsWithRouter}
              />
              <Route
                path={`${match.path}/cast`}
                exact
                component={CastWithRouter}
              />
            </Switch>
          </>
        )}
      </>
    );
  }
}
