import React from 'react';
import logo from '../../assets/images/work-order-logo.png';
import PageFooter from '../../common/PageFooter';

const NotFound = (): JSX.Element => {
  return (
    <main className="page-not-found">
      <section className="page-section">
        <img src={logo} className="logo" alt="Work Order Control" />
        <h1>Página não encontrada</h1>
        <PageFooter />
      </section>
    </main>
  );
};

export default NotFound;
