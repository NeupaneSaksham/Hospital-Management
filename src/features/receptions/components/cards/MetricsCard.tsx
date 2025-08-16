import StatCard from "@/features/receptions/components/cards/StatCard"
import { Users, DollarSign, Package, ShoppingCart } from "lucide-react"

interface MetricsCardProps {
  totalCustomers: number;
  totalProfit: number;
  outOfStock: number;
  totalSales: number;
}

const MetricsCard = ({ totalCustomers, totalProfit, outOfStock, totalSales }: MetricsCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Total Customer"
        value={totalCustomers}
        containerClassName="bg-white shadow-sm"
        rightAdornment={
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        }
      />

      <StatCard
        title="Total Profit"
        value={`Rs.${totalProfit}`}
        containerClassName="bg-white shadow-sm"
        rightAdornment={
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3">
              <div className="w-full h-full bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-0 left-0 w-2 h-2">
              <div className="w-full h-full bg-yellow-300 rounded-full animate-ping"></div>
            </div>
          </div>
        }
      />

      <StatCard
        title="Out of Stock"
        value={outOfStock}
        containerClassName="bg-white shadow-sm"
        rightAdornment={
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
        }
      />

      <StatCard
        title="Total Sales"
        value={totalSales}
        containerClassName="bg-white shadow-sm"
        rightAdornment={
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        }
      />
    </div>
  )
}

export default MetricsCard


