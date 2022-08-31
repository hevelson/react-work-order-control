import db from '../database';
import PouchDB from 'pouchdb-browser';
import IOrderFormData from '../../interfaces/IOrderFormData';

export interface IOrderData {
  _id: string;
  clientId: string;
  code: string;
  deviceType: string;
  brand: string;
  model: string;
  serialNumber: string;
  orderType: string;
  status: string;
  amount: number;
  defect: string;
  comments: string;
  createdAt: Date;
}

export const getAllOrders = (): Promise<PouchDB.Core.AllDocsResponse<IOrderData>> => {
  return db.orders.allDocs<IOrderData>({ include_docs: true });
};

export const getOrder = (orderId: string): Promise<PouchDB.Core.IdMeta & PouchDB.Core.GetMeta> => {
  return db.orders.get(orderId);
};

export const setOrder = (orderData: IOrderFormData): Promise<PouchDB.Core.Response> => {
  const newOrder = {
    _id: new Date().toISOString(),
    ...orderData,
  };

  return db.orders.put(newOrder);
};

export const deleteOrder = async (orderId: string): Promise<PouchDB.Core.Response> => {
  try {
    const order = await getOrder(orderId);
    return db.orders.remove(order);
  } catch (error) {
    throw error;
  }
};
