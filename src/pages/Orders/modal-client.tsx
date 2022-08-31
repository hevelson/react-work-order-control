import React, { SyntheticEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import SystemModal from '../../common/SystemModal';
import initialClientForm from '../../constants/initial-client-form';
import IClientFormData from '../../interfaces/IClientFormData';
import { setClient } from '../../services/models/clients';

interface IProps {
  modalIsOpen: boolean;
  onClose: () => void;
}

const ModalClient = ({ modalIsOpen, onClose }: IProps): JSX.Element => {
  const [clientData, setClientData] = useState<IClientFormData>(initialClientForm);

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setClient(clientData);
    onClose();
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setClientData({
      ...clientData,
      [name]: value,
    });
  };

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const key = name.split('.')[1];
    const { phones } = clientData;
    const newPhones = [...phones];
    const numberKey = parseInt(key);
    newPhones[numberKey] = value;

    setClientData({
      ...clientData,
      phones: newPhones,
    });
  };

  return (
    <SystemModal modalIsOpen={modalIsOpen}>
      <section className="section-work-order-form">
        <header>
          <h2>Cadastrar novo cliente</h2>
          <button className="close-modal" onClick={onClose}>
            <FaTimes />
          </button>
        </header>
        <form onSubmit={onSubmit} className="work-order-form client-form">
          <div className="fields">
            <div className="form-group">
              <label htmlFor="novo_cliente_nome">Nome</label>
              <input
                type="text"
                value={clientData.name}
                onChange={onInputChange}
                className="form-control"
                name="name"
                id="novo_cliente_nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="novo_cliente_cep">CEP</label>
              <input
                type="text"
                value={clientData.postalCode}
                onChange={onInputChange}
                className="form-control"
                name="postalCode"
                id="novo_cliente_cep"
              />
            </div>
            <div className="form-group">
              <label htmlFor="novo_cliente_endereco">Endereço</label>
              <input
                type="text"
                value={clientData.streetLineOne}
                onChange={onInputChange}
                className="form-control"
                name="streetLineOne"
                id="novo_cliente_endereco"
              />
            </div>
            <div className="form-group">
              <label htmlFor="novo_cliente_numero">Número</label>
              <input
                type="text"
                value={clientData.number}
                onChange={onInputChange}
                className="form-control"
                name="number"
                id="novo_cliente_numero"
              />
            </div>
            <div className="form-group">
              <label htmlFor="novo_cliente_complemento">Complemento</label>
              <input
                type="text"
                value={clientData.streetLineTwo}
                onChange={onInputChange}
                className="form-control"
                name="streetLineTwo"
                id="novo_cliente_complemento"
              />
            </div>
            <div className="form-group">
              <label htmlFor="novo_cliente_bairro">Bairro</label>
              <input
                type="text"
                value={clientData.neighborhood}
                onChange={onInputChange}
                className="form-control"
                name="neighborhood"
                id="novo_cliente_bairro"
              />
            </div>
            <div className="form-group">
              <label htmlFor="novo_cliente_cidade">Cidade</label>
              <input
                type="text"
                value={clientData.city}
                onChange={onInputChange}
                className="form-control"
                name="city"
                id="novo_cliente_cidade"
              />
            </div>
            <div className="form-group">
              <label htmlFor="novo_cliente_estado">Estado</label>
              <input
                type="text"
                value={clientData.state}
                onChange={onInputChange}
                className="form-control"
                name="state"
                id="novo_cliente_estado"
              />
            </div>
            <div className="form-group">
              <label htmlFor="novo_cliente_email">E-mail</label>
              <input
                type="text"
                value={clientData.email}
                onChange={onInputChange}
                className="form-control"
                name="email"
                id="novo_cliente_email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="novo_cliente_telefone_um">Telefone (1)</label>
              <input
                type="text"
                value={clientData.phones[0]}
                onChange={onChangePhone}
                className="form-control"
                name="phone.0"
                id="novo_cliente_telefone_um"
              />
            </div>
            <div className="form-group">
              <label htmlFor="novo_cliente_telefone_dois">Telefone (2)</label>
              <input
                type="text"
                value={clientData.phones[1]}
                onChange={onInputChange}
                className="form-control"
                name="phone.1"
                id="novo_cliente_telefone_dois"
              />
            </div>
          </div>
          <footer>
            <button type="button" className="btn btn-transparent" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </footer>
        </form>
      </section>
    </SystemModal>
  );
};

export default ModalClient;
