import React, { useState } from 'react';
import ModalOrder from './modal-order';
import IWorkOrder from '../../interfaces/IWorkOrder';

const Orders = (): JSX.Element => {
  const [showModalForm, setShowModalForm] = useState(false);
  const ordersExample: IWorkOrder = {
    id: 'asdf1234',
    orderNumber: '20210718',
    client: {
      id: 'abcd1234',
      code: '202107181008',
      name: 'Hevelson',
      phone: '(15) 98765-4321',
      address: 'Rua Um',
      addressLineTwo: '',
      number: '123 A',
      neighborhood: 'Vila Nova',
      city: 'Itapetininga',
      state: 'SP',
      createdAt: new Date('2021-07-18 10:08'),
    },
    device: {
      id: 'abcd12345os',
      clientId: 'abcd1234',
      code: '202107181008',
      deviceType: 'TV LCD',
      brand: 'LG',
      model: '47LB6500',
      serialNumber: '180823174',
      createdAt: new Date('2021-07-18 10:08'),
    },
    orderType: 'estimate',
    status: 'work in',
    amount: 0,
    defect: 'só logo',
    createdAt: new Date('2021-07-18 10:08'),
    technician: {
      id: 'abcd12345tech',
      code: '20210718',
      name: 'Cristiano R',
      createdAt: new Date('2021-07-18 10:08'),
    },
    operator: {
      id: 'abcd12345ope',
      code: '20210718',
      name: 'Cristiano JR',
      createdAt: new Date('2021-07-18 10:08'),
    },
  };

  const renderModalForm = () => {
    return <ModalOrder modalIsOpen={showModalForm} onClose={() => setShowModalForm(false)} />;
  };

  const renderWorkOrdersRows = () => {
    const workOrderRows = [];

    for (let i = 0; i < 10; i++) {
      const {
        orderNumber,
        createdAt,
        orderType,
        status,
        amount,
        defect,
        client: { name },
        device: { deviceType, brand, model },
        technician: { name: techName },
        operator: { name: opeName },
      } = ordersExample;

      workOrderRows.push(
        <tr key={i}>
          <td>{orderNumber}</td>
          <td>{createdAt.toLocaleString()}</td>
          <td>{name}</td>
          <td>{deviceType}</td>
          <td>{brand}</td>
          <td>{model}</td>
          <td>{orderType}</td>
          <td>{status}</td>
          <td>Dias</td>
          <td>
            {amount.toLocaleString(navigator.language, {
              style: 'decimal',
              minimumFractionDigits: 2,
            })}
          </td>
          <td>{techName}</td>
          <td>{opeName}</td>
          <td>{defect}</td>
        </tr>
      );
    }

    return workOrderRows;
  };

  return (
    <section className="page-section page-work-order-list">
      <header className="page-header">
        <h1 className="page-title">Aparelhos em manutenção</h1>
        <div className="actions">
          <button type="button" className="btn-primary" onClick={() => setShowModalForm(true)}>
            Nova OS
          </button>
        </div>
      </header>
      <div className="page-content">
        <table className="striped-table">
          <thead>
            <tr>
              <td>OS</td>
              <td>Entrada</td>
              <td>Cliente</td>
              <td>Aparelho</td>
              <td>Marca</td>
              <td>Modelo</td>
              <td>Tipo</td>
              <td>Status</td>
              <td>Dias</td>
              <td>Valor</td>
              <td>Técnico</td>
              <td>Operador</td>
              <td>Defeito</td>
            </tr>
          </thead>
          <tbody>{renderWorkOrdersRows()}</tbody>
        </table>
      </div>
      {renderModalForm()}
    </section>
  );
};

export default Orders;
