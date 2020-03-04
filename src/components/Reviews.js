import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import routes from "../routes";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

class Reviews extends Component {
  state = {
    reviews: []
  };

  componentDidMount = () => {
    moviesApi
      .fetchReviews(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews }));
  };

  //TODO Fix HTML
  //TODO Add styles
  //TODO Add placehoder for IMG
  render() {
    return (
      <ul>
        {this.state.reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <span>{review.content}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(Reviews);
