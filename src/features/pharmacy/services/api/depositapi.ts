import { API } from '@/api/client';
import { endpoint } from '../depositendpoint';

export const depositApi = {
  createDeposit: async () => {
    const res = await API.post(endpoint.createDeposit);
    console.log('Category created...', res.status);
    return res.data ?? [];
  },
  getSpecificDeposit: async (id: string) => {
    const res = await API.get(endpoint.getSpecificDeposit(id));
    console.log('Get specific deposit', res.status);
    return res.data ?? [];
  },
  listAllDeposits: async () => {
    const res = await API.get(endpoint.listAllDeposits);
    console.log('List deposits...', res.status);
    return res.data ?? [];
  },
  listUserDeposit: async (id: string) => {
    const res = await API.get(endpoint.listUserDeposit(id));
    console.log('List user deposit', res.status);
    return res.data ?? [];
  }
};
