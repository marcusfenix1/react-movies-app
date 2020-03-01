import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import routes from "../routes";
import MoviesDetailsPage from "../pages/MoviesDetailsPage";

const App = () => (
  <Layout>
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movieDetails} component={MoviesDetailsPage} />
    </Switch>
  </Layout>
);

export default App;
