import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import styled from "styled-components";
import Spinner from "../components/Spinner";

const StyledAuthor = styled.p`
  font-weight: bold;
  text-decoration: underline;
`;

const StyledReviewContent = styled.span`
  font-style: italic;
`;
class Reviews extends Component {
  state = {
    reviews: [],
    isLoading: false
  };

  componentDidMount = () => {
    this.setState({ isLoading: true });

    moviesApi
      .fetchReviews(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { reviews, isLoading } = this.state;

    return (
      <div>
        {isLoading && <Spinner />}
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <StyledAuthor>Author: {review.author}</StyledAuthor>
                <StyledReviewContent>{review.content}</StyledReviewContent>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don`t have any reviews for this movie</p>
        )}
      </div>
    );
  }
}

export default Reviews;
