
import { useState } from "react"
import { Search, Plus, Settings, User, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SharedSidebar  from "./Sidebar/Sidebar"

export default function StockManagement() {
  const [activeTab, setActiveTab] = useState<"all" | "out-of-stock" | "in-stock">("all")

  const stockData = {
    "in-stock": [
      {
        id: 1,
        name: "Sinex",
        stock: 10,
        price: "Rs.1200",
        mfgDate: "2026/3/4",
        expiryDate: "2027/3/4",
        status: "In Stock",
      },
      {
        id: 2,
        name: "Sinex",
        stock: 10,
        price: "Rs.1200",
        mfgDate: "2026/3/4",
        expiryDate: "2027/3/4",
        status: "In Stock",
      },
    ],
    "out-of-stock": [
      {
        id: 1,
        name: "Sinex",
        stock: 10,
        price: "Rs.1200",
        mfgDate: "2026/3/4",
        expiryDate: "2027/3/4",
        status: "Out Of Stock",
      },
      {
        id: 2,
        name: "Sinex",
        stock: 10,
        price: "Rs.1200",
        mfgDate: "2026/3/4",
        expiryDate: "2027/3/4",
        status: "Out Of Stock",
      },
    ],
    all: [
      {
        id: 1,
        name: "Sinex",
        stock: 10,
        price: "Rs.1200",
        mfgDate: "2026/3/4",
        expiryDate: "2027/3/4",
        status: "In Stock",
      },
      {
        id: 2,
        name: "Sinex",
        stock: 10,
        price: "Rs.1200",
        mfgDate: "2026/3/4",
        expiryDate: "2027/3/4",
        status: "Out Of Stock",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-5.5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-teal-500">Stocks</h1>
          <div className="flex items-center gap-4">
            <Settings className="w-5 h-5 text-teal-500" />
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">Pharmacy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <SharedSidebar activePage="stocks" />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Stock list</h1>

            <div className="flex gap-1 mb-6">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-sm rounded-md ${
                  activeTab === "all" ? "text-white bg-teal-500" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("out-of-stock")}
                className={`px-4 py-2 text-sm rounded-md ${
                  activeTab === "out-of-stock" ? "text-white bg-teal-500" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Out Of Stock
              </button>
              <button
                onClick={() => setActiveTab("in-stock")}
                className={`px-4 py-2 text-sm rounded-md ${
                  activeTab === "in-stock" ? "text-white bg-teal-500" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                In Stock
              </button>
            </div>

            {/* Search and Add Section */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search" className="pl-10 bg-gray-50 border-gray-200" />
                </div>

                <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50 bg-transparent cursor-pointer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Filter by Date
                </Button>
              </div>

              <Button className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer">
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>

            {/* Stocks Table */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-teal-500">Stocks</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                        S.N
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                        Item Name
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                        Stock
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                        Price/Unit
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                        MFGD Date
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                        Expiry Date
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockData[activeTab].map((item, index) => (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td className="px-4 py-3 text-sm text-gray-600">{index + 1}.</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{item.stock}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{item.price}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{item.mfgDate}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{item.expiryDate}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`text-sm font-medium ${
                              item.status === "In Stock" ? "text-teal-600" : "text-red-600"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
