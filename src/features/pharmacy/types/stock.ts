import type { measurement } from './measurement';
export interface Stock{
    id: string,
    name: string,
    category: string,
    description: string,
    each_price: number,
    total_quantity: number,
    unit_of_measure: number | measurement,
    mfd_date: string,
    expiry_date: string,
    manufacturer: string,
    supplier: string,
    total_price: number,
    unit_price: number,
    item_properties: number
}