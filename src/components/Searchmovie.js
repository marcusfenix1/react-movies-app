import React, { Component } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &:placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export default class Searchmovie extends Component {
  state = { value: "" };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <StyledInput
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter a movie name"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
