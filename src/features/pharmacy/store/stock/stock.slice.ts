import type { StateCreator } from 'zustand';
import type { Stock } from '../../types/stock';
import {
  fetchAllStocks,
  fetchSingleStock,
  deleteStock,
  updateStock,
} from './stock.api';

export interface StockState {
  stocks: Stock[];
  selectedStock: Stock | null;
  loading: boolean;
  error: string | null;
  listAllStock: (name?: string, date?: string) => Promise<void>;
  getSpecificStock: (id: string) => Promise<void>;
  deleteStock: (id: string) => Promise<void>;
  updateStock: (id: string) => Promise<void>;
}

export const createStockSlice: StateCreator<StockState> = (set) => ({
  stocks: [],
  selectedStock: null,
  loading: false,
  error: null,

  listAllStock: async (name = '', date = '') => {
    set({ loading: true, error: null   });
    try {
      const data = await fetchAllStocks(name, date);
      set({ stocks: data, loading: false });
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch stocks', loading: false });
    }
  },
  getSpecificStock: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchSingleStock(id);
      set({ selectedStock: data, loading: false });
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch stock', loading: false });
    }
  },

  deleteStock: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await deleteStock(id);
      set((state) => ({
        stocks: state.stocks.filter((s: any) => (s as any)._id !== id),
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message || 'Failed to delete stock', loading: false });
    }
  },

  updateStock: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await updateStock(id);
      set({ loading: false });
    } catch (err: any) {
      set({ error: err.message || 'Failed to update stock', loading: false });
    }
  },
});
