import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal } from "lucide-react"
import { SearchBar } from "@/features/receptions/components/search/SearchBar"

interface Order {
  id: number
  medicine: string
  batch: string
  quantity: string
  price: string
  status: "DELIVERED" | "PENDING" | "CANCELLED"
}

interface Props {
  orders: Order[]
}

const RecentOrdersTable = ({ orders }: Props) => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Recent Orders</CardTitle>
          <Button variant="ghost" className="text-blue-600 text-sm">
            See All →
          </Button>
        </div>
        <div className="relative">
          <div className="w-64">
            <SearchBar value={""} onChange={() => {}} placeholder="Search keyword..." />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Checkbox />
                    MEDICINE NAME ↑
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">BATCH NO ↑</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">QUANTITY ↑</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">PRICE</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">STATUS</th>
                <th className="w-8"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Checkbox />
                      <span className="text-gray-900">{order.medicine}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{order.batch}</td>
                  <td className="py-4 px-4 text-gray-900">{order.quantity}</td>
                  <td className="py-4 px-4 text-gray-900">{order.price}</td>
                  <td className="py-4 px-4">
                    <Badge
                      className={
                        order.status === "DELIVERED"
                          ? "bg-green-100 text-green-800"
                          : order.status === "PENDING"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                      }
                    >
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentOrdersTable
