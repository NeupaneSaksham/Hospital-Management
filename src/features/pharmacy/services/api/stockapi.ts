import { API } from '@/api/client';
import { endpoint } from '../stockendpoint';

export const stockApi = {
  getDashboardData: async () => {
    const res = await API.get(endpoint.getDashboardData);
    console.log('Fetch dashboard data', res.status);
    return res.data ?? [];
  },
  
};
