export default interface IClientFormData {
  [key: string]: string | string[];
  name: string;
  description: string;
  email: string;
  phones: string[];
  streetLineOne: string;
  streetLineTwo: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
}
