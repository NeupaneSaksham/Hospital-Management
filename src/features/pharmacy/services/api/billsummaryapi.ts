import { API } from '@/api/client';
import { endpoint } from '../billsummaryendpoint';

export const billSummaryApi = {
  createBillSummary: async () => {
    const res = await API.post(endpoint.createBillSummary);
    console.log('Bill summary created..', res.status);
    return res.data ?? [];
  },
  getSpecificBillSummary: async (id: string) => {
    const res = await API.get(endpoint.getSepecificBillSummary(id));
    console.log('Get bill summary....', res.status);
    return res.data ?? [];
  },
  listBillSummary: async (id: string) => {
    const res = await API.get(endpoint.listBillSummary(id));
    console.log('List bill summary', res.status);
    return res.data ?? [];
  },
  listPersonalBillSummary: async (id: string) => {
    const res = await API.get(endpoint.listPersonBillSummary(id));
    console.log('List personal bill summary', res.status);
    return res.data ?? [];
  },
};
