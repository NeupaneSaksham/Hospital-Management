import type { Categories } from '../../types/categories';
import SummaryApi from '../../api/api';

export const createCategory = async (data: { name: string }): Promise<Categories | any> => {
  const res = await fetch(SummaryApi.category.createCategory.url, {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.category.createCategory.method,
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create category');
  return res.json();
};

export const updateCategory = async (id: string): Promise<Categories | any> => {
  const res = await fetch(SummaryApi.category.updateCategory.url(id), {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.category.updateCategory.method,
  });
  if (!res.ok) throw new Error('Failed to update category');
  return res.json();
};

export const deleteCategory = async (): Promise<Categories | any> => {
  const res = await fetch(SummaryApi.category.deleteCategory.url, {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.category.deleteCategory.method,
  });
  if (!res.ok) throw new Error('Delete Category failed');
  return res.json();
};

export const getSpecificCategory = async (
  id: string,
): Promise<Categories | any> => {
  const res = await fetch(SummaryApi.category.getSpecificCategory.url(id), {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.category.getSpecificCategory.method,
  });
  if (!res.ok) throw new Error('GET specific category failed');
  return res.json();
};

export const listCategory = async (): Promise<Categories[] | any> => {
  const res = await fetch(SummaryApi.category.listCategory.url, {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.category.listCategory.method,
  });
  if (!res.ok) throw new Error('List category failed');
  return res.json();
};
