export interface LoginFormType {
  login: string;
  password: string | number;
}

export interface ContactFormType {
  firstname?: string;
  lastname?: string;
  phonenumber?: number;
  email?: string;
}

export type RegisterFormType = {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};
