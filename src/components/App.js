import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import routes from "../routes";
import MoviesDetailsPage from "../pages/MoviesDetailsPage";
import MoviesPage from "../pages/MoviesPage";

const App = () => (
  <Layout>
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.movieDetails} component={MoviesDetailsPage} />
    </Switch>
  </Layout>
);

export default App;
