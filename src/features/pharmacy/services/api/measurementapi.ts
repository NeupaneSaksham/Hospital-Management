import { API } from '@/api/client';
import { endpoint } from '../measurementendpoint';
import type { measurement } from '../../types/measurement';

export const measurementApi = {
  createMeasurementUnit: async ({name}:{name:string}):  Promise<measurement> => {
    const res = await API.post(endpoint.createMeasurementUnit, {name});
    console.log('Measurement unit created....', res.status);
    return res.data.data ?? [];
  },
  deleteMeasurement: async () => {
    const res = await API.delete(endpoint.deleteMeasurement);
    console.log('Measurement deleted....', res.status);
    return res.data ?? [];
  },
  getSpecificMeasurement: async () => {
    const res = await API.get(endpoint.getSpecificMeasurement);
    console.log('Get specific measurement...', res.status);
    return res.data ?? [];
  },
  updateMeasurement: async (id: string) => {
    const res = await API.patch(endpoint.updateMeasurement(id));
    console.log('Update measurement', res.status);
    return res.data ?? [];
  },
  listMeasurement: async() => {
    const res = await API.get(endpoint.listMeasurment);
    console.log('Update measurement', res.status);
    return res.data ?? [];
  }
};