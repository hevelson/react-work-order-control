import db from '../database';
import PouchDB from 'pouchdb-browser';

export interface IBrand {
  _id: string;
  name: string;
}

export const getAllBrands = (): Promise<PouchDB.Core.AllDocsResponse<IBrand>> => {
  return db.brands.allDocs<IBrand>({ include_docs: true });
};

export const getBrand = (brandId: string): Promise<PouchDB.Core.IdMeta & PouchDB.Core.GetMeta> => {
  return db.brands.get(brandId);
};

export const setBrand = (name: string): Promise<PouchDB.Core.Response> => {
  const newBrand = {
    _id: new Date().toISOString(),
    name,
  };

  return db.brands.put(newBrand);
};

export const deleteBrand = async (brandId: string): Promise<PouchDB.Core.Response> => {
  try {
    const brand = await getBrand(brandId);
    return db.brands.remove(brand);
  } catch (error) {
    throw error;
  }
};
