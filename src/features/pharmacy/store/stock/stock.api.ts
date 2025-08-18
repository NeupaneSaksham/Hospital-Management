import type { Stock } from '../../types/stock';
import SummaryApi from '../../api/api';

// Fetch all Stocks
export const fetchAllStocks = async (
  name: string,
  date: string,
): Promise<Stock[] | any> => {
  const res = await fetch(SummaryApi.stock.listAllStock.url(name, date), {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.stock.listAllStock.method,
  });
  if (!res.ok) throw new Error('Failed to fetch stocks');
  return res.json();
};

// Fetch Single Stock
export const fetchSingleStock = async (id: string): Promise<Stock | any> => {
  const res = await fetch(SummaryApi.stock.getSpecificStock.url(id), {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.stock.getSpecificStock.method,
  });
  if (!res.ok) throw new Error('Failed to single stock');
  return res.json();
};

// Delete Stock
export const deleteStock = async (id: string): Promise<Stock | any> => {
  const res = await fetch(SummaryApi.stock.deleteStock.url(id), {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.stock.deleteStock.method,
  });
  if (!res.ok) throw new Error('Failed to delete stock');
  return res.json();
};

// Update Stock
export const updateStock = async (id: string): Promise<Stock | any> => {
  const res = await fetch(SummaryApi.stock.updateStock.url(id), {
    headers: { 'Content-Type': 'application/json' },
    method: SummaryApi.stock.updateStock.method,
  });
  if (!res.ok) throw new Error('Failed to update stock');
  return res.json();
};
