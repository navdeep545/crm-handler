export interface ICustomerSchema {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  phone_number: string;
  residence: string;
  email: string;
  signUpDate: string;
  lastActivity: string;
}

export interface ICustomerResponse {
  statusCode: string;
  message: string;
}
