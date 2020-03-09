import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Spinner from "../components/Spinner";

const StyledCastList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const StyledCastListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 200px;
  margin-bottom: 15px;
`;

const StyledCastImg = styled.img`
  max-width: 200px;
`;

const StyledCastText = styled.span`
  font-weight: bold;
`;
class Cast extends Component {
  state = {
    casts: [],
    isLoaded: false
  };

  componentDidMount = () => {
    this.setState({ isLoaded: true });

    moviesApi
      .fetchCastInfo(this.props.match.params.movieId)
      .then(casts => this.setState({ casts }))
      .finally(() => this.setState({ isLoaded: false }));
  };

  render() {
    const { isLoaded, casts } = this.state;
    return (
      <>
        {isLoaded && <Spinner />}
        <StyledCastList>
          {casts.map(castPerson => (
            <StyledCastListItem key={castPerson.cast_id}>
              {castPerson.profile_path ? (
                <StyledCastImg
                  src={`https://image.tmdb.org/t/p/w200${castPerson.profile_path}`}
                  alt={castPerson.name}
                />
              ) : (
                <StyledCastImg
                  src="https://via.placeholder.com/200x300.png"
                  alt={castPerson.name}
                />
              )}
              <StyledCastText>{castPerson.name}</StyledCastText>
              <span>
                Character:
                <StyledCastText> {castPerson.character}</StyledCastText>
              </span>
            </StyledCastListItem>
          ))}
        </StyledCastList>
      </>
    );
  }
}

export default withRouter(Cast);
