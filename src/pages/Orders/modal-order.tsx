import React, { SyntheticEvent, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { FaTimes } from 'react-icons/fa';
import { getAllBrands } from '../../services/models/brands';
import SystemModal from '../../common/SystemModal';
import ModalBrand from './modal-brand';

interface IProps {
  modalIsOpen: boolean;
  onClose: () => void;
}

const loadBrands = async (inputValue: string) => {
  const allBrandsList = await getAllBrands();
  const brandsList = allBrandsList.rows.map(brand => {
    if (brand.doc) {
      return {
        label: brand.doc.name,
        value: brand.doc,
      };
    }

    return {
      label: brand.key,
      value: brand,
    };
  });

  return brandsList.filter(brand => brand.label.toLowerCase().includes(inputValue.toLowerCase()));
};

const ModalOrder = ({ modalIsOpen, onClose }: IProps): JSX.Element => {
  const [showModalBrand, setShowModalBrand] = useState(false);
  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <SystemModal modalIsOpen={modalIsOpen}>
      <section className="section-work-order-form">
        <header>
          <h2>Ordem de serviço número: 5230</h2>
          <button className="close-modal" onClick={onClose}>
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
              <AsyncSelect cacheOptions defaultOptions loadOptions={loadBrands} />
              <button type="button" onClick={() => setShowModalBrand(true)}>
                +
              </button>
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
        <ModalBrand modalIsOpen={showModalBrand} onClose={() => setShowModalBrand(false)} />
      </section>
    </SystemModal>
  );
};

export default ModalOrder;
