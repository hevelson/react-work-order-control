import db from '../database';
import PouchDB from 'pouchdb-browser';

export interface IOrderData {
  _id: string;
  clientId: string;
  code: string;
  device: {
    deviceType: string;
    brand: string;
    model: string;
    serialNumber: string;
  }
  orderType: string;
  status: string;
  amount: number;
  defect: string;
  createdAt: Date;
}

export const getAllOrders = (): Promise<PouchDB.Core.AllDocsResponse<IOrderData>> => {
  return db.orders.allDocs<IOrderData>({ include_docs: true });
};

export const getOrder = (orderId: string): Promise<PouchDB.Core.IdMeta & PouchDB.Core.GetMeta> => {
  return db.orders.get(orderId);
};

export const setOrder = (name: string): Promise<PouchDB.Core.Response> => {
  const newdevice = {
    _id: new Date().toISOString(),
    name,
  };

  return db.orders.put(newdevice);
};

export const deleteOrder = async (orderId: string): Promise<PouchDB.Core.Response> => {
  try {
    const order = await getOrder(orderId);
    return db.orders.remove(order);
  } catch (error) {
    throw error;
  }
};
