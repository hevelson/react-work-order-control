import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';

interface IProps {
  children: JSX.Element;
}

const PanelLayout = (props: IProps): JSX.Element => {
  const { children } = props;

  return (
    <main className="main-panel">
      <TopBar />
      <SideBar />
      <div className="panel-content">{children}</div>
    </main>
  );
};

export default PanelLayout;
