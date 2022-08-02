import db from '../database';
import PouchDB from 'pouchdb-browser';

export interface IDevice {
  _id: string;
  name: string;
}

export const getAllDevices = (): Promise<PouchDB.Core.AllDocsResponse<IDevice>> => {
  return db.devices.allDocs<IDevice>({ include_docs: true });
};

export const getDevice = (deviceId: string): Promise<PouchDB.Core.IdMeta & PouchDB.Core.GetMeta> => {
  return db.devices.get(deviceId);
};

export const setDevice = (name: string): Promise<PouchDB.Core.Response> => {
  const newdevice = {
    _id: new Date().toISOString(),
    name,
  };

  return db.devices.put(newdevice);
};

export const deleteDevice = async (deviceId: string): Promise<PouchDB.Core.Response> => {
  try {
    const device = await getDevice(deviceId);
    return db.devices.remove(device);
  } catch (error) {
    throw error;
  }
};
