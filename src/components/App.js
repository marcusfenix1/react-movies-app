import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Spinner from "../components/Spinner";
import routes from "../routes";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import MoviesDetailsPage from "../pages/MoviesDetailsPage";
import MoviesPage from "../pages/MoviesPage";

// const Layout = React.lazy(() => import("./Layout"));
// const HomePage = React.lazy(() => import("../pages/HomePage"));
// const MoviesDetailsPage = React.lazy(() =>
//   import("../pages/MoviesDetailsPage")
// );
// const MoviesPage = React.lazy(() => import("../pages/MoviesPage"));

const App = () => (
  // <Suspense fallback={<Spinner />}>
  <Layout>
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.movieDetails} component={MoviesDetailsPage} />
      <Redirect to={routes.home} />
    </Switch>
  </Layout>
  // </Suspense>
);

export default App;
