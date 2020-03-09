import React, { Component } from "react";
import routes from "../routes";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  &:visited {
    color: #333;
  }

  &:hover {
    color: royalblue;
  }
`;

const StyledList = styled.ul`
  list-style: square;
  padding-left: 30px;
`;

class MoviesList extends Component {
  render() {
    const { location, movies } = this.props;

    return (
      <StyledList>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledLink
              to={{
                pathname: `${routes.movies}/${movie.id}`,
                state: { from: location }
              }}
            >
              {movie.title}
            </StyledLink>
          </li>
        ))}
      </StyledList>
    );
  }
}

export default withRouter(MoviesList);
