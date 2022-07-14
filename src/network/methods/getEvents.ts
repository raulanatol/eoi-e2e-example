import { doGet } from '../utils';

export const getEvents = async () => doGet('/events');
