import type { measurement } from '../../types/measurement';
import SummaryApi from '../../api/api';

export const postUnitOfMeasurement = async (
  name: string,
): Promise<measurement | any> => {
  const res = await fetch(
    SummaryApi.unitOfMeasurement.postUnitOfMeasurement.url,
    {
      headers: { 'Content-Type': 'application/json' },
      method: SummaryApi.unitOfMeasurement.postUnitOfMeasurement.method,
      body: JSON.stringify({ name }),
    },
  );
  if (!res.ok) throw new Error('Failed to create unit of measurement');
  return res.json();
};

export const updateUnitOfMeasurement = async (
  id: any,
): Promise<measurement | any> => {
  const res = await fetch(
    SummaryApi.unitOfMeasurement.updateUnitOfMeasurement.url(id),
    {
      headers: { 'Content-Type': 'application/json' },
      method: SummaryApi.unitOfMeasurement.updateUnitOfMeasurement.method,
    },
  );
  if (!res.ok) throw new Error('Failed to update unit of measurement');
  return res.json();
};

export const deleteMeasurement = async (): Promise<measurement | any> => {
  const res = await fetch(SummaryApi.unitOfMeasurement.deleteMeasurement.url, {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.unitOfMeasurement.deleteMeasurement.method,
  });
  if (!res.ok) throw new Error('Failed to delete unit of measurement');
  return res.json();
};

export const listMeasurement = async (): Promise<measurement | any> => {
  const res = await fetch(SummaryApi.unitOfMeasurement.listMeasurement.url, {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.unitOfMeasurement.listMeasurement.method,
  });
  if (!res.ok) throw new Error('Failed to list unit of measurement');
  return res.json();
};

export const getSepecificMeasurement = async (
  id: any,
): Promise<measurement | any> => {
  const res = await fetch(
    SummaryApi.unitOfMeasurement.getSepecificMeasurement.url(id),
    {
      headers: { 'Content-Type': 'application/json' },
      method: SummaryApi.unitOfMeasurement.getSepecificMeasurement.method,
    },
  );
  if (!res.ok) throw new Error('Failed to get specific unit of measurement');
  return res.json();
};
