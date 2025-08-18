import { API } from '@/api/client';
import { endpoint } from '../categoryendpoint';
import type { Categories } from '../../types/categories';

export const categoryApi = {
  createCategory: async ({ name }: { name: string }): Promise<Categories> => {
    const res = await API.post(endpoint.createCategory, { name });
    console.log('Category created...', res.status);
    return res.data;
  },
  deleteCategory: async () => {
    const res = await API.delete(endpoint.deleteCategory);
    console.log('Delete category...', res.status);
    return res.data ?? [];
  },
  getSpecificCategory: async (id: string) => {
    const res = await API.get(endpoint.getSpecificCategory(id));
    console.log('Get specific category', res.status);
    return res.data ?? [];
  },
  updateCategory: async (id: string) => {
    const res = await API.get(endpoint.updateCategory(id));
    console.log('Update category', res.status);
    return res.data ?? [];
  },
  listCategory: async () => {
    const res = await API.get(endpoint.listCategory);
    console.log('List category', res.status);
    return res.data ?? [];
  },
};
