
export interface Order {
  id: number
  medicine: string
  batch: string
  quantity: string
  price: string
  status: "DELIVERED" | "PENDING" | "CANCELLED"
}