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
  border: solid 3px;
  border-radius: 9px;
  border-color: gray;
  background-color: darkgray;
  display: block;
  width: 100px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  width: 15%;

  &:hover {
    color: royalblue;
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
