import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  margin-bottom: 30px;
`;

const StyledNavListItem = styled.li`
  margin-left: 15px;

  &:first-child {
    margin-left: 0px;
  }
`;

const StyledNavLink = styled(NavLink)`
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

//TODO refactor "scrollToRef" without settimeout
class MovieAdditionalInfo extends Component {
  myRef = React.createRef();

  scrollToRef = () => {
    this.myRef.current.scrollIntoView();
  };

  render() {
    const { location, match } = this.props;

    return (
      <>
        <h3>Additional information</h3>
        <StyledNavList>
          <StyledNavListItem>
            <StyledNavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { ...location.state },
              }}
              ref={this.myRef}
              onClick={this.scrollToRef}
            >
              Cast
            </StyledNavLink>
          </StyledNavListItem>
          <StyledNavListItem>
            <StyledNavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { ...location.state },
              }}
              ref={this.myRef}
              onClick={this.scrollToRef}
            >
              Reviews
            </StyledNavLink>
          </StyledNavListItem>
        </StyledNavList>
      </>
    );
  }
}

export default withRouter(MovieAdditionalInfo);
