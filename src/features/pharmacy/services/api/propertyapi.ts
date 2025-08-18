import { API } from '@/api/client';
import { endpoint } from '../propertyendpoint';
import type { Property } from '../../types/property';

export const propertyApi = {
  postProperty: async ({name}: {name:string}): Promise<Property>=> {
    const res = await API.post(endpoint.createProperty, {name});
    console.log('post new property...', res.status);
    return res.data ?? [];
  },
  updateProperty: async (id: string) => {
    const res = await API.patch(endpoint.updateProperty(id));
    console.log('update property..', res.status);
    return res.data ?? [];
  },
  deleteProperty: async () => {
    const res = await API.delete(endpoint.deleteProperty);
    console.log('delete property..', res.status);
    return res.data ?? [];
  },
  listProperty: async () => {
    const res = await API.get(endpoint.listProperty);
    console.log('list property...', res.status);
    return res.data ?? [];
  },
  getSpecificProperty: async (id: string) => {
    const res = await API.get(endpoint.getSpecificProperty(id));
    console.log('get specific property..', res.status);
    return res.data ?? [];
  },
};
