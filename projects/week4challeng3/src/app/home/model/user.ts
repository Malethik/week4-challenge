export type Gender = 'male' | 'female' | 'other' | 'preferNotToSay';
export type AccountType = 'personal' | 'pro' | 'business';

export type LoginData = Pick<AccesData, 'username' | 'password'>;

export interface AccesData {
  username: string;
  password: string;
  accountType: AccountType;
}

export interface PersonalData {
  name: string;
  lastName: string;
  birthDate: string;
  Gender: Gender;
  Email: string;
  newsletter: boolean;
}
export interface User extends PersonalData, AccesData {}
