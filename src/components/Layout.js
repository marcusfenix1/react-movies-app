import React from "react";
import styled from "styled-components";
import Appbar from "../components/Appbar";

const Container = styled.div`
  max-width: 1170px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <Container className="Layout">
    <Appbar />
    {children}
  </Container>
);

export default Layout;
