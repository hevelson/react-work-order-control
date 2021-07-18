import IClient from './IClient';
import IDevice from './IDevice';
import ITechnician from './ITechnician';
import IOperator from './IOperator';

export default interface IWorkOrder {
  id: string;
  orderNumber: string;
  client: IClient;
  device: IDevice;
  orderType: string;
  status: string;
  amount: number;
  defect: string;
  createdAt: Date;
  technician: ITechnician;
  operator: IOperator;
}
