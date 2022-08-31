import React, { SyntheticEvent, useEffect, useState } from 'react';
import Select from 'react-select';
import { FaTimes } from 'react-icons/fa';
import IOrderFormData from '../../interfaces/IOrderFormData';
import { getAllBrands } from '../../services/models/brands';
import { getAllDevices } from '../../services/models/devices';
import SystemModal from '../../common/SystemModal';
import ModalBrand from './modal-brand';
import ModalDevice from './modal-device';
import ModalClient from './modal-client';
import initialOrderForm from '../../constants/initial-order-form';
import { setOrder } from '../../services/models/orders';
import { getAllClients } from '../../services/models/clients';

interface IProps {
  modalIsOpen: boolean;
  onClose: () => void;
}

interface IOption {
  value: string;
  label: string;
}

const loadBrands = async (inputValue: string) => {
  const allBrandsList = await getAllBrands();
  const brandsList = allBrandsList.rows.map(brand => {
    if (brand.doc) {
      return {
        label: brand.doc.name,
        value: brand.doc.name,
      };
    }

    return {
      label: brand.key,
      value: brand.id,
    };
  });

  return brandsList.filter(brand => brand.label.toLowerCase().includes(inputValue.toLowerCase()));
};

const loadDevices = async (inputValue: string) => {
  const allDevicesList = await getAllDevices();
  const devicesList = allDevicesList.rows.map(device => {
    if (device.doc) {
      return {
        label: device.doc.name,
        value: device.doc.name,
      };
    }

    return {
      label: device.key,
      value: device.id,
    };
  });

  return devicesList.filter(device => device.label.toLowerCase().includes(inputValue.toLowerCase()));
};

const loadClients = async (inputValue: string) => {
  const allClientsList = await getAllClients();
  const clientsList = allClientsList.rows.map(client => {
    if (client.doc) {
      return {
        label: client.doc.name,
        value: client.doc._id,
      };
    }

    return {
      label: client.key,
      value: client.id,
    };
  });

  return clientsList.filter(client => {
    if (
      client.label.toLowerCase().includes(inputValue.toLowerCase()) ||
      client.value.toLowerCase().includes(inputValue.toLowerCase())
    ) {
      return true;
    }
  });
};

const ModalOrder = ({ modalIsOpen, onClose }: IProps): JSX.Element => {
  const [showModalBrand, setShowModalBrand] = useState(false);
  const [showModalDevice, setShowModalDevice] = useState(false);
  const [showModalClient, setShowModalClient] = useState(false);
  const [allClients, setAllClients] = useState<IOption[]>([]);
  const [allBrands, setAllBrands] = useState<IOption[]>([]);
  const [allDevices, setAllDevices] = useState<IOption[]>([]);
  const [orderData, setOrderData] = useState<IOrderFormData>(initialOrderForm);

  useEffect(() => {
    const getAllClients = async () => {
      const optionList = await loadClients('');
      setAllClients(optionList);
    };

    if (!showModalClient) {
      getAllClients();
    }

    const getAllBrands = async () => {
      const optionList = await loadBrands('');
      setAllBrands(optionList);
    };

    if (!showModalClient) {
      getAllBrands();
    }

    const getAllDevices = async () => {
      const optionList = await loadDevices('');
      setAllDevices(optionList);
    };

    if (!showModalClient) {
      getAllDevices();
    }
  }, [showModalClient, showModalDevice, showModalBrand]);

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      setOrder(orderData);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    orderData[name] = value;
    setOrderData(orderData);
  };

  const onClientChange = (option: IOption | null) => {
    if (option) {
      const { value } = option;
      orderData.clientId = value;
      setOrderData({
        ...orderData,
        clientId: value,
      });
    }
  };

  const onBrandChange = (option: IOption | null) => {
    if (option) {
      const { value } = option;
      setOrderData({
        ...orderData,
        brand: value,
      });
    }
  };

  const onDeviceChange = (option: IOption | null) => {
    if (option) {
      const { value } = option;
      setOrderData({
        ...orderData,
        deviceType: value,
      });
    }
  };

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    orderData[name] = value;
    setOrderData(orderData);
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
          <div className="form-content">
            <div className="fields">
              <div className="form-group">
                <label htmlFor="cliente">Cliente</label>
                <div className="input-group">
                  <Select
                    value={allClients.find(option => option.value === orderData.clientId)}
                    options={allClients}
                    onChange={onClientChange}
                    className="form-select"
                    placeholder="Selecione..."
                  />
                  <button
                    type="button"
                    onClick={() => setShowModalClient(true)}
                    className="btn-input-group btn-primary">
                    +
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="aparelho">Aparelho</label>
                <div className="input-group">
                  <Select
                    value={allDevices.find(option => option.value === orderData.deviceType)}
                    options={allDevices}
                    onChange={onDeviceChange}
                    className="form-select"
                    placeholder="Selecione..."
                  />
                  <button
                    type="button"
                    onClick={() => setShowModalDevice(true)}
                    className="btn-input-group btn-primary">
                    +
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="marca">Marca</label>
                <div className="input-group">
                  <Select
                    value={allBrands.find(option => option.value === orderData.brand)}
                    options={allBrands}
                    onChange={onBrandChange}
                    className="form-select"
                    placeholder="Selecione..."
                  />
                  <button type="button" onClick={() => setShowModalBrand(true)} className="btn-input-group btn-primary">
                    +
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="modelo">Modelo</label>
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  id="modelo"
                  value={orderData.model}
                  onChange={onInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="numSerie">Núm série</label>
                <input
                  type="text"
                  className="form-control"
                  name="numSerie"
                  id="numSerie"
                  value={orderData.serialNumber}
                  onChange={onInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="defeito">Defeito</label>
                <input
                  type="text"
                  className="form-control"
                  name="defect"
                  id="defeito"
                  value={orderData.defect}
                  onChange={onInputChange}
                />
              </div>
              <div className="form-group text-area">
                <label htmlFor="defeito">Observações</label>
                <textarea
                  id="observacoes"
                  className="form-control"
                  name="observacoes"
                  value={orderData.comments}
                  onChange={onTextChange}
                  rows={5}></textarea>
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
          </div>
          <footer>
            <button type="button" className="btn-transparent" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              Salvar
            </button>
          </footer>
        </form>
        <ModalBrand modalIsOpen={showModalBrand} onClose={() => setShowModalBrand(false)} />
        <ModalDevice modalIsOpen={showModalDevice} onClose={() => setShowModalDevice(false)} />
        <ModalClient modalIsOpen={showModalClient} onClose={() => setShowModalClient(false)} />
      </section>
    </SystemModal>
  );
};

export default ModalOrder;
