import React from 'react';
import { Switch, Route } from 'react-router';
import pages from './pages';
import PublicRoute from './PublicRoute';
import NotFound from '../pages/NotFound';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      {pages.map((route, i) => {
        return <PublicRoute key={i} {...route} />;
      })}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
