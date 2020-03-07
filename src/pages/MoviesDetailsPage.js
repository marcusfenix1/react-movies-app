import React, { Component } from "react";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import moviesApi from "../services/moviesApi";
import routes from "../routes";
import styled from "styled-components";
import CastWithRouter from "../components/Cast";
import ReviewsWithRouter from "../components/Reviews";

// import { withRouter } from "react-router-dom";

const StyledMoviePoster = styled.img`
  max-width: 200px;
  min-height: 300px;
`;

//TODO: Подправить стили
const StyledGenreText = styled.span`
  margin-left: 15px;
`;

//TODO: Подправить стили
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

    // const { genres } = this.state.movie;

    // console.log(genres);
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.movies);
  };

  //TODO: Деструктуризировать state

  //TODO: Пересмотреть разметку

  //TODO: Отрефакторить

  //TODO Повторное нажатие Navlink сворачивает информацию??

  //TODO: Если нет fetchreviews, то вывести предупреждение

  render() {
    // const { genres } = this.state.movie;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go Back
        </button>

        <br />

        {this.state.movie !== null && (
          <>
            <StyledMoviePoster
              //TODO: Проверить ссылку  на наличие img
              src={`https://image.tmdb.org/t/p/w200${this.state.movie.poster_path}`}
              alt={this.state.movie.original_title}
            />
            <div>
              <h1>{this.state.movie.original_title}</h1>
              <span>User score: {this.state.movie.vote_average}</span>
              <h2>Overview:</h2>
              <StyledOveriewText>{this.state.movie.overview}</StyledOveriewText>
              <h3>Genres</h3>
              <div>
                {this.state.movie.genres.map(genre => (
                  <StyledGenreText key={genre.id}>{genre.name}</StyledGenreText>
                ))}
              </div>
            </div>
            <div>
              <h3>Additional information</h3>
              <ul>
                <li>
                  <NavLink
                    to={{
                      pathname: `${this.props.match.url}/cast`
                      // state: { ...this.props.location.state }
                    }}
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: `${this.props.match.url}/reviews`
                      // state: { ...this.props.location.state }
                    }}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>

            <Switch>
              <Route
                path={`${this.props.match.path}/reviews`}
                exact
                component={ReviewsWithRouter}
              />
              <Route
                path={`${this.props.match.path}/cast`}
                exact
                component={CastWithRouter}
              />
            </Switch>
            {/* <CastWithRouter /> */}
            {/* <ReviewsWithRouter /> */}
          </>
        )}
      </>
    );
  }
}

// const MoviesDetailsPageWithRouter = withRouter(MoviesDetailsPage);
