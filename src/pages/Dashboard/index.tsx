import React from 'react';
import PageFooter from '../../common/PageFooter';

const Dashboard = (): JSX.Element => {
  return (
    <section className="page-section">
      <header className="page-header">
        <h1>Dashboard</h1>
      </header>
      <div className="page-content">
        <p>Resumo de ordens de serviço</p>
      </div>
      <PageFooter />
    </section>
  );
};

export default Dashboard;
