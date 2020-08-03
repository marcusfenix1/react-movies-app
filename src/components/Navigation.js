import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import routes from "../routes";

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
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: orange;
  }
`;

const Navigation = () => (
  <StyledNavList>
    <StyledNavListItem>
      <StyledNavLink
        className="Navigation-link"
        activeClassName="Navigation-link-active"
        to={routes.home}
        exact
      >
        Home
      </StyledNavLink>
    </StyledNavListItem>
    <StyledNavListItem>
      <StyledNavLink
        className="Navigation-link"
        activeClassName="Navigation-link-active"
        to={routes.movies}
      >
        Movies
      </StyledNavLink>
    </StyledNavListItem>
  </StyledNavList>
);

export default Navigation;
