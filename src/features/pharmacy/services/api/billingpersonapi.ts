import { API } from '@/api/client';
import { endpoint } from '../billingpersonendpoint';

export const billingPersonApi = {
  getDueStatus: async (id:string) => {
    const res = await API.get(endpoint.getDueStatus(id));
    console.log('Fetch due status...', res.status);
    return res.data ?? [];
  },
  getBill: async () => {
    const res = await API.get(endpoint.getBill);
    console.log('Fetch bill...', res.status);
    return res.data ?? [];
  },
  listBillPersonInfo: async () => {
    const res = await API.get(endpoint.listBillPersonInfo);
    console.log('List bill person info....', res.status);
    return res.data ?? [];
  },
};