import type { Property } from '../../types/property';
import SummaryApi from '../../api/api';

// Post Property
export const postProperty = async (): Promise<Property | any> => {
  const res = await fetch(SummaryApi.property.postProperty.url, {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.property.postProperty.method,
  });
  if (!res.ok) throw new Error('Failed to create property');
  return res.json();
};

// Update Category
export const updateProperty = async (id: string): Promise<Property | any> => {
  const res = await fetch(SummaryApi.property.updateProperty.url(id), {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.property.updateProperty.method,
  });
  if (!res.ok) throw new Error('Failed to update property');
  return res.json();
};

// Delete Category
export const deleteProperty = async (): Promise<Property | any> => {
  const res = await fetch(SummaryApi.property.deleteProperty.url, {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.property.deleteProperty.method,
  });
  if (!res.ok) throw new Error('Failed to delete property');
  return res.json();
};

//List category
export const listProperty = async (): Promise<Property | any> => {
  const res = await fetch(SummaryApi.property.listProperty.url, {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.property.listProperty.method,
  });
  if (!res.ok) throw new Error('Failed to fetch list property');
  return res.json();
};

// Get specific category
export const getSpecificProperty = async (
  id: string,
): Promise<Property | any> => {
  const res = await fetch(SummaryApi.property.getSpecificProperty.url(id), {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.property.getSpecificProperty.method,
  });
  if (!res.ok) throw new Error('Failed to get the specific category');
  return res.json();
};
