import { doPost } from '../utils';

export const signin = async (email: string, password: string) =>
  doPost('/auth/signin', { email, password });
