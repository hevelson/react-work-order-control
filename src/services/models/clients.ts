import db from '../database';
import PouchDB from 'pouchdb-browser';
import IClientFormData from '../../interfaces/IClientFormData';

export interface IClientData {
  _id: string;
  name: string;
  description: string;
  contact: {
    email: string;
    phones: string[];
  };
  address: {
    streetLineOne: string;
    streetLineTwo: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
  };
  createdAt: Date;
}

export const getAllClients = (): Promise<PouchDB.Core.AllDocsResponse<IClientData>> => {
  return db.orders.allDocs<IClientData>({ include_docs: true });
};

export const getClient = (clientId: string): Promise<PouchDB.Core.IdMeta & PouchDB.Core.GetMeta> => {
  return db.orders.get(clientId);
};

export const setClient = (clientData: IClientFormData): Promise<PouchDB.Core.Response> => {
  const newClient = {
    _id: new Date().toISOString(),
    ...clientData,
  };

  return db.orders.put(newClient);
};

export const deleteClient = async (clientId: string): Promise<PouchDB.Core.Response> => {
  try {
    const client = await getClient(clientId);
    return db.orders.remove(client);
  } catch (error) {
    throw error;
  }
};
