import type { StateCreator } from 'zustand';
import type { measurement } from '../../types/measurement';
import {
  postUnitOfMeasurement, updateUnitOfMeasurement, deleteMeasurement, getSepecificMeasurement
} from './measurement.api';

export interface MeasurementState {
  measurements: measurement[];
  selectedMeasurement: measurement | null;
  loading: boolean;
  error: string | null;
  postUnitOfMeasurement: (name?: string) => Promise<void>;
  getSpecificMeasurement: (id: string) => Promise<void>;
  deleteMeasurement: (id: string) => Promise<void>;
  updateMeasurement: (id: string) => Promise<void>;
}

export const createMeasurementSlice: StateCreator<MeasurementState> = (set) => ({
  measurements: [],
  selectedMeasurement: null,
  
  loading: false,
  error: null,

 postUnitOfMeasurement: async (name = '') => {
    set({ loading: true, error: null   });
    try {
      const data = await postUnitOfMeasurement(name);
      set({ measurements: data, loading: false });
    } catch (err: any) {
      set({ error: err.message || 'Failed to post unit of measurement', loading: false });
    }
  },
  
  getSpecificMeasurement: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await getSepecificMeasurement(id);
      set({ selectedMeasurement: data, loading: false });
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch measurement', loading: false });
    }
  },
  updateUnitOfMeasurement: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await updateUnitOfMeasurement(id);
      set({ selectedMeasurement: data, loading: false });
    } catch (err: any) {
      set({ error: err.message || 'Failed to update measurement', loading: false });
    }
  },

  deleteMeasurement: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await deleteMeasurement();
      set((state) => ({
        measurements: state.measurements.filter((m: any) => (m as any)._id !== id),
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message || 'Failed to delete measurement', loading: false });
    }
  },

  updateMeasurement: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await updateUnitOfMeasurement(id);
      set({ selectedMeasurement: data, loading: false });
    } catch (err: any) {
      set({ error: err.message || 'Failed to update measurement', loading: false });
    }
  },
});
