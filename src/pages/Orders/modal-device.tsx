import React, { SyntheticEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { setDevice } from '../../services/models/devices';
import SystemModal from '../../common/SystemModal';

interface IProps {
  modalIsOpen: boolean;
  onClose: () => void;
}

const ModalDevice = ({ modalIsOpen, onClose }: IProps): JSX.Element => {
  const [deviceName, setDeviceName] = useState('');

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setDevice(deviceName);
    onClose();
  };

  return (
    <SystemModal modalIsOpen={modalIsOpen}>
      <section className="section-work-order-form">
        <header>
          <h2>Cadastrar novo aparelho</h2>
          <button className="close-modal" onClick={onClose}>
            <FaTimes />
          </button>
        </header>
        <form onSubmit={onSubmit} className="work-order-form">
          <div className="fields">
            <div className="form-group">
              <label htmlFor="novo_aparelho">Novo Aparelho</label>
              <input
                type="text"
                value={deviceName}
                onChange={event => setDeviceName(event.target.value)}
                className="form-control"
                name="novo_aparelho"
                id="novo_aparelho"
              />
            </div>
          </div>
          <footer>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </footer>
        </form>
      </section>
    </SystemModal>
  );
};

export default ModalDevice;
