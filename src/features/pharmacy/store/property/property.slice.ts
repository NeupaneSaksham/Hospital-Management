import type { StateCreator } from 'zustand';
import type { Property } from '../../types/property';
import {
  postProperty,
  updateProperty,
  deleteProperty,
  listProperty,
  getSpecificProperty,
} from './property.api';

export interface PropertyState {
  properties: Property[];
  selectedProperty: Property | null;
  loading: boolean;
  error: string | null;
  postAllProperty: () => Promise<void>;
  updateSingleProperty: (id: string) => Promise<void>;
  deleteAllProperty: () => Promise<void>;
  listAllProperty: () => Promise<void>;
  getSingleProperty: (id: string) => Promise<void>;
}

export const createPropertySlice: StateCreator<PropertyState> = (set) => ({
  properties: [],
  selectedProperty: null,
  loading: false,
  error: null,

  postAllProperty: async () => {
    set({ loading: true, error: null });
    try {
      const data = await postProperty();
      set((state) => ({
        properties: [...state.properties, data],
        loading: false,
      }));
    } catch (err: any) {
      set({
        error: err.message || 'Failed to create property',
        loading: false,
      });
    }
  },

  updateSingleProperty: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await updateProperty(id);
      set({ selectedProperty: data, loading: false });
    } catch (err: any) {
      set({
        error: err.message || 'Failed to update property',
        loading: false,
      });
    }
  },

  deleteAllProperty: async () => {
    set({ loading: true, error: null });
    try {
      await deleteProperty();
      set({ loading: false });
    } catch (err: any) {
      set({
        error: err.message || 'Failed to delete property',
        loading: false,
      });
    }
  },

  listAllProperty: async () => {
    set({ loading: true, error: null });
    try {
      const data = await listProperty();
      set({ properties: data, loading: false });
    } catch (err: any) {
      set({
        error: err.message || 'Failed to fetch list property',
        loading: false,
      });
    }
  },

  getSingleProperty: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await getSpecificProperty(id);
      set({ selectedProperty: data, loading: false });
    } catch (err: any) {
      set({
        error: err.message || 'Failed to get the specific property',
        loading: false,
      });
    }
  },
});
