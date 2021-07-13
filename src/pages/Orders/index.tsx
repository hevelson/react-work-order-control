import React from 'react';
import PageFooter from '../../common/PageFooter';

const Orders = (): JSX.Element => {
  return (
    <section className="page-section">
      <header className="page-header">
        <h1>Ordens de serviço</h1>
      </header>
      <div className="page-content">
        <p>Listagem de ordens de serviço</p>
      </div>
      <PageFooter />
    </section>
  );
};

export default Orders;
