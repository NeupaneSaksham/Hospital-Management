import type { StateCreator } from 'zustand';
import type { Categories } from '../../types/categories';
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getSpecificCategory,
  listCategory,
} from './category.api';

export interface CategoryState {
  categories: Categories[];
  selectedCategory: Categories | null;
  loading: boolean;
  error: string | null;
  createAllCategory: (categoryData: { name: string }) => Promise<void>;
  updateSingleCategory: (id: string) => Promise<void>;
  deleteAllCategory: () => Promise<void>;
  getSingleCategory: (id:string) => Promise<void>;
  listAllCategory: () => Promise<void>;
}


export const createCategorySlice: StateCreator<CategoryState> = (set) => ({
  categories: [],
  selectedCategory: null,
  loading: false,
  error: null,

  createAllCategory: async (categoryData: { name: string }) => {
    set({ loading: true, error: null });
    try {
      const data = await createCategory(categoryData);
      set((state) => ({
        categories: [...state.categories, data],
        loading: false,
      }));
    } catch (err: any) {
      set({
        error: err.message || 'Failed to create category',
        loading: false,
      });
    }
  },

  updateSingleCategory: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await updateCategory(id);
      set({ selectedCategory: data, loading: false });
    } catch (err: any) {
      set({
        error: err.message || 'Failed to update category',
        loading: false,
      });
    }
  },

  deleteAllCategory: async () => {
    set({ loading: true, error: null });
    try {
      await deleteCategory();
      set({ loading: false });
    } catch (err: any) {
      set({
        error: err.message || 'Failed to delete category',
        loading: false,
      });
    }
  },

  listAllCategory: async () => {
    set({ loading: true, error: null });
    try {
      const data = await listCategory();
      set({ categories: data, loading: false });
    } catch (err: any) {
      set({
        error: err.message || 'Failed to list category',
        loading: false,
      });
    }
  },

  getSingleCategory: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await getSpecificCategory(id);
      set({ selectedCategory: data, loading: false });
    } catch (err: any) {
      set({
        error: err.message || 'Failed to get the specific category',
        loading: false,
      });
    }
  },
});
