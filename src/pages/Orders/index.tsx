import React, { SyntheticEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import SystemModal from '../../common/SystemModal';
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

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const renderModalForm = () => {
    return (
      <SystemModal modalIsOpen={showModalForm}>
        <section className="section-work-order-form">
          <header>
            <h2>Ordem de serviço número: 5230</h2>
            <button className="close-modal" onClick={() => setShowModalForm(false)}>
              <FaTimes />
            </button>
          </header>
          <form onSubmit={onSubmit} className="work-order-form">
            <div className="fields">
              <div className="form-group">
                <label htmlFor="aparelho">Aparelho</label>
                <input type="text" className="form-control" name="aparelho" id="aparelho" />
              </div>
              <div className="form-group">
                <label htmlFor="marca">Marca</label>
                <input type="text" className="form-control" name="marca" id="marca" />
              </div>
              <div className="form-group">
                <label htmlFor="modelo">Modelo</label>
                <input type="text" className="form-control" name="modelo" id="modelo" />
              </div>
              <div className="form-group">
                <label htmlFor="numSerie">Núm série</label>
                <input type="text" className="form-control" name="numSerie" id="numSerie" />
              </div>
              <div className="form-group">
                <label htmlFor="defeito">Defeito</label>
                <input type="text" className="form-control" name="defeito" id="defeito" />
              </div>
            </div>
            <div className="order-info">
              <div className="order-number">5230</div>
              <ul>
                <li>
                  <span className="info-title">Entrada</span>
                  <span className="info-value">01/03/2019 17:27</span>
                </li>
                <li>
                  <span className="info-title">Dias</span>
                  <span className="info-value">25</span>
                </li>
                <li>
                  <span className="info-title">Tipo</span>
                  <span className="info-value">Orçamento</span>
                </li>
                <li>
                  <span className="info-title">Operador</span>
                  <span className="info-value">Cristiano</span>
                </li>
                <li>
                  <span className="info-title">Status</span>
                  <span className="info-value">Em serviço</span>
                </li>
                <li>
                  <span className="info-title">Técnico</span>
                  <span className="info-value"></span>
                </li>
                <li>
                  <span className="info-title">Conclusão</span>
                  <span className="info-value"></span>
                </li>
              </ul>
              <div className="amount">Valor: R$ 0,00</div>
            </div>
          </form>
        </section>
      </SystemModal>
    );
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
