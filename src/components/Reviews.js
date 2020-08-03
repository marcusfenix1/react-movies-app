import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import Spinner from "../components/Spinner";
import ReviewsItem from "../components/ReviewsItem";

class Reviews extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };

  myRef = React.createRef();

  scrollToRef = () => {
    this.myRef.current.scrollIntoView();
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await moviesApi
      .fetchReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews }))
      .finally(() => this.setState({ isLoading: false }));

    if (this.state.reviews.length > 0) {
      this.scrollToRef();
    }
  };

  render() {
    const { reviews, isLoading } = this.state;

    return (
      <div>
        {isLoading && <Spinner />}
        {reviews.length > 0 ? (
          <ul ref={this.myRef}>
            {reviews.map((review) => (
              <ReviewsItem
                key={review.id}
                author={review.author}
                content={review.content}
              />
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
