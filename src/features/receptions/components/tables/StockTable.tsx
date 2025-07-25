import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Eye, Trash2 } from "lucide-react"

export interface StockItem {
  name: string
  category: string
  quantity: number
  price: string
  status: string
}

interface StockTableProps {
  items: StockItem[]
  onEdit?: (item: StockItem) => void
  onView?: (item: StockItem) => void
  onDelete?: (item: StockItem) => void
}

export default function StockTable({ items, onEdit, onView, onDelete }: StockTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">Quantity</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">Price</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4 px-4 text-gray-900">{item.name}</td>
              <td className="py-4 px-4 text-gray-600">{item.category}</td>
              <td className="py-4 px-4 text-gray-900">{item.quantity}</td>
              <td className="py-4 px-4 text-gray-900">{item.price}</td>
              <td className="py-4 px-4">
                <Badge
                  className={
                    item.status === "In Stock"
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : "bg-red-100 text-red-800 hover:bg-red-100"
                  }
                >
                  {item.status}
                </Badge>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700"
                    onClick={() => onEdit?.(item)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-blue-500 hover:text-blue-700"
                    onClick={() => onView?.(item)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                    onClick={() => onDelete?.(item)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



// minor logic update 1262
