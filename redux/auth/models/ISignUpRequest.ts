export interface ISignUpRequest {
  name: string;
  email?: string;
  phone?: string;
  birthDay: number;
  birthMonth: number;
  birthYear: number;
  password: string;
}
