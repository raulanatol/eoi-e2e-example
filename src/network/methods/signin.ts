import { doGet } from '../utils';

export const signin = async (email: string, password: string) => {
  return await doGet('/auth/signin', { email, password });
};
