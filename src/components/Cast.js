import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import routes from "../routes";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

//TODO: изменить пустой объект на null
class Cast extends Component {
  state = {
    casts: [
      //   {
      //     cast_id: 55,
      //     character: "Tony Stark / Iron Man",
      //     credit_id: "58700eee9251412ae400238b",
      //     gender: 2,
      //     id: 3223,
      //     name: "Robert Downey Jr.",
      //     order: 0,
      //     profile_path: "/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg"
      //   },
      //   {
      //     cast_id: 22,
      //     character: "Steve Rogers / Captain America",
      //     credit_id: "585d55afc3a368408600c438",
      //     gender: 2,
      //     id: 16828,
      //     name: "Chris Evans",
      //     order: 1,
      //     profile_path: "/7dUkkq1lK593XvOjunlUB11lKm1.jpg"
      //   }
    ]
  };

  componentDidMount = () => {
    moviesApi
      .fetchCastInfo(this.props.match.params.movieId)
      .then(casts => this.setState({ casts }));
  };

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

// {"id": 299534,
//   "cast": [
//     {
//       "cast_id": 55,
//       "character": "Tony Stark / Iron Man",
//       "credit_id": "58700eee9251412ae400238b",
//       "gender": 2,
//       "id": 3223,
//       "name": "Robert Downey Jr.",
//       "order": 0,
//       "profile_path": "/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg"
//     },
//     {
//       "cast_id": 22,
//       "character": "Steve Rogers / Captain America",
//       "credit_id": "585d55afc3a368408600c438",
//       "gender": 2,
//       "id": 16828,
//       "name": "Chris Evans",
//       "order": 1,
//       "profile_path": "/7dUkkq1lK593XvOjunlUB11lKm1.jpg"
//     }}
