import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

const StyledContainer = styled.div`
  margin-bottom: 30px;
`;

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
`;

const StyledNavListItem = styled.li`
  margin-left: 15px;

  &:first-child {
    margin-left: 0px;
  }
`;

const StyledNavLink = styled(NavLink)`
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

  &:hover {
    color: royalblue;
  }
`;

class MovieAdditionalInfo extends Component {
  render() {
    const { location, match } = this.props;

    return (
      <StyledContainer>
        <h3>Additional information</h3>
        <StyledNavList>
          <StyledNavListItem>
            <StyledNavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { ...location.state }
              }}
            >
              Cast
            </StyledNavLink>
          </StyledNavListItem>
          <StyledNavListItem>
            <StyledNavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { ...location.state }
              }}
            >
              Reviews
            </StyledNavLink>
          </StyledNavListItem>
        </StyledNavList>
      </StyledContainer>
    );
  }
}

export default withRouter(MovieAdditionalInfo);
