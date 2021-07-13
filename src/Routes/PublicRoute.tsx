import React from 'react';
import { Route } from 'react-router-dom';
import PanelLayout from '../common/PanelLayout';

interface IProps {
  component: React.FC | React.ElementType;
}

const PublicRoute = ({ component: Component, ...rest }: IProps): JSX.Element => {
  return (
    <PanelLayout>
      <Route {...rest} render={props => <Component {...props} />} />
    </PanelLayout>
  );
};

export default PublicRoute;
