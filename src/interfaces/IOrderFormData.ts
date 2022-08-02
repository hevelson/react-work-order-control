export default interface IOrderFormData {
  [key: string]: boolean | number | string | Date;
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
  createdAt: Date;
}
