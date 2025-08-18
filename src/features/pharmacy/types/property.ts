import type { Stock } from "./stock"

export interface Property {
    id: string,
    name: string | Stock
}