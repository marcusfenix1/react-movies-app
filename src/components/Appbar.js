import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const StyledHeader = styled.header`
  height: 50px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Appbar = () => (
  <StyledHeader>
    <Navigation />
  </StyledHeader>
);

export default Appbar;
