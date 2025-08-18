import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Plus } from "lucide-react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/pharmacy-sidebar"
import { AppHeader } from "../components/pharmacy-header"

export default function BillingHistory() {
  return (
    <div className="flex min-h-screen w-full">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen w-full">
          <AppHeader title="Billing History" />
          <main className="p-4 md:p-6 flex-1 w-full">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
              {/* Header Section */}
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h1 className="text-xl font-medium text-gray-900 pb-2 border-b-2 border-teal-500 inline-block">
                    Billing history
                  </h1>
                </div>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Bill
                </Button>
              </div>

              {/* Search and Filter Section */}
              <div className="flex items-center gap-4 p-6 border-b">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search" className="pl-10 bg-gray-50 border-gray-200" />
                </div>
                <Button variant="outline" className="border-gray-300 bg-transparent cursor-pointer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Filter by Date
                </Button>
              </div>

              {/* Table Section */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-medium text-gray-900">S.N.</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Bill Code</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Patient Name</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">PatientID</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Date</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Due Amount</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Due Date</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">No. Of Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 text-gray-700">1.</td>
                      <td className="py-4 px-6 text-gray-700">123761824</td>
                      <td className="py-4 px-6 text-gray-700">Baburao G. Aapte</td>
                      <td className="py-4 px-6 text-gray-700">A123456</td>
                      <td className="py-4 px-6 text-gray-700">2019/2/14</td>
                      <td className="py-4 px-6 text-gray-700">Rs.27441</td>
                      <td className="py-4 px-6 text-gray-700">2019/2/14</td>
                      <td className="py-4 px-6 text-gray-700">12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}