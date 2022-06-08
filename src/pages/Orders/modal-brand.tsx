import React, { SyntheticEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { setBrand } from '../../services/models/brands';
import SystemModal from '../../common/SystemModal';

interface IProps {
  modalIsOpen: boolean;
  onClose: () => void;
}

const ModalBrand = ({ modalIsOpen, onClose }: IProps): JSX.Element => {
  const [brandName, setBrandName] = useState('');

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setBrand(brandName);
    onClose();
  };

  return (
    <SystemModal modalIsOpen={modalIsOpen}>
      <section className="section-work-order-form">
        <header>
          <h2>Cadastrar nova marca</h2>
          <button className="close-modal" onClick={onClose}>
            <FaTimes />
          </button>
        </header>
        <form onSubmit={onSubmit} className="work-order-form">
          <div className="fields">
            <div className="form-group">
              <label htmlFor="nova_marca">Nova Marca</label>
              <input
                type="text"
                value={brandName}
                onChange={event => setBrandName(event.target.value)}
                className="form-control"
                name="nova_marca"
                id="nova_marca"
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

export default ModalBrand;
