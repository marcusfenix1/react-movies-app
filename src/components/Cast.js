import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import routes from "../routes";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

//TODO: изменить пустой объект на null
class Cast extends Component {
  state = {
    casts: []
  };

  componentDidMount = () => {
    moviesApi
      .fetchCastInfo(this.props.match.params.movieId)
      .then(casts => this.setState({ casts }));
  };

  //TODO Добавить placeholder для image
  render() {
    return (
      <>
        {this.state.casts.map(castPerson => (
          <div key={castPerson.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${castPerson.profile_path}`}
              alt={castPerson.name}
            />
            <span>{castPerson.name}</span>
            <span>Character: {castPerson.character}</span>
          </div>
        ))}
      </>
    );
  }
}

export default withRouter(Cast);
