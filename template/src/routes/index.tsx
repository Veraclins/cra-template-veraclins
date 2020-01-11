import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from 'styles/globals';
import { themes } from 'styles';
import Navbar from 'components/Navbar';

const Home = lazy(() => import('pages/Home'));

interface RouteProps {
  path: string;
  exact: boolean;
}

const routes = (
  <React.Fragment>
    <GlobalStyles />
    <Navbar theme={themes.default} />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </Suspense>
  </React.Fragment>
);

export default routes;
