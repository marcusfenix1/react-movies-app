import React, { Component } from "react";
import { Link } from "react-router-dom";
import getQueryParams from "../utils/getQueryParams";
import Searchmovie from "../components/Searchmovie";
import moviesApi from "../services/moviesApi";
import routes from "../routes";

export default class MoviesPage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }

    console.log("Component did mount ", query);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }

    console.log(this.state.movies);
  }

  fetchMovies = query => {
    moviesApi
      .fetchMoviesWithQuery(query)
      .then(movies => this.setState({ movies }));

    console.log(this.state.movies);
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`
    });
  };

  //TODO ul выделить в компонент, прокинуть пропы через withRouter
  render() {
    const { movies } = this.state;
    // const { match } = this.props;

    return (
      <>
        <Searchmovie onSubmit={this.handleChangeQuery} />
        {this.state.movies.length > 0 && (
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
        )}
      </>
    );
  }
}

// return (
//   <>
//     <Searchmovie onSubmit={this.handleChangeQuery} />

//     {this.state.movies.length > 0 && (
//       <ul>
//         {this.state.movies.map(movie => (
//           <li key={movie.id}>
//             <Link
//               to={{
//                 pathname: `${routes.movies}/${movie.id}`,
//                 state: { from: this.props.location }
//               }}
//             >
//               {movie.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     )}
//   </>
// );
// }
