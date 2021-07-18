export default interface IDevice {
  id: string;
  clientId: string;
  code: string;
  deviceType: string;
  brand: string;
  model: string;
  serialNumber: string;
  createdAt: Date;
}
