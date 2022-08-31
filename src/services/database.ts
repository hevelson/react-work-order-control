import PouchDB from 'pouchdb-browser';

const orders = new PouchDB('work_orders');
const brands = new PouchDB('device_brands');
const models = new PouchDB('device_models');
const devices = new PouchDB('device_types');
const clients = new PouchDB('clients');

export default {
  orders,
  brands,
  models,
  devices,
  clients,
};
