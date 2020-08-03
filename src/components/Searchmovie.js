import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const StyledInput = styled.input`
  width: 30%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border-bottom: solid 2px;
  border-bottom-color: darkgray;
  margin-bottom: 30px;

  &:placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: #3f51b5;
  display: block;
  width: 100px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;

  &:hover {
    transition-duration: 0.25s;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export default class Searchmovie extends Component {
  state = { value: "" };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter a movie name"
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
    );
  }
}
