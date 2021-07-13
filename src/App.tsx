import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const App = (): JSX.Element => {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const initApp = async () => {
      setAppLoading(false);
    };

    const initAppTimeout = setTimeout(initApp, 1000);
    return () => clearTimeout(initAppTimeout);
  }, []);

  if (appLoading) {
    return (
      <main>
        <div className="overlay-loading" />
      </main>
    );
  }

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
