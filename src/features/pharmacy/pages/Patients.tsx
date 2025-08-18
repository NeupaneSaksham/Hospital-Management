
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '../components/pharmacy-sidebar'
import { AppHeader } from '../components/pharmacy-header'
import { Eye } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import PageHeader from '@/features/receptions/components/headers/PageHeader'
import { SearchBar } from '@/features/receptions/components/search/SearchBar'
import { DateFilter } from '@/features/receptions/components/forms/DateFilter'
// import { useQuery } from '@tanstack/react-query'

const PatientInfo = () => {
const navigate = useNavigate();
const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen w-full">
      {/* Header */}
      <PageHeader title="Patient Info" />

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search" wrapperClassName="w-full sm:max-w-sm" />
        <DateFilter />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 w-8"></th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">PatientID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Email</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Phone</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Age</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Address</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Date</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Diagnosis</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Visits</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">View</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-4 text-sm text-gray-600">1.</td>
              <td className="px-4 py-4 text-sm text-gray-900">Baburao G. Aapte</td>
              <td className="px-4 py-4 text-sm text-gray-600">A123456</td>
              <td className="px-4 py-4 text-sm text-gray-600">Babur@Gmail.Com</td>
              <td className="px-4 py-4 text-sm text-gray-600">9812345678</td>
              <td className="px-4 py-4 text-sm text-gray-600">32</td>
              <td className="px-4 py-4 text-sm text-gray-600">Somewhere</td>
              <td className="px-4 py-4 text-sm text-gray-600">2019/2/14</td>
              <td className="px-4 py-4 text-sm text-gray-600">Disease</td>
              <td className="px-4 py-4 text-sm text-gray-600">3</td>
              <td className="px-4 py-4">
                <Eye className="h-5 w-5 text-blue-500 cursor-pointer hover:text-blue-600" onClick={() => navigate("/pharmacy/patient/viewpatient/:id")} />
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

const Patients = () => {
  return (
    <div className="flex min-h-screen w-full">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen w-full">
          <AppHeader title="Patients" />
          <main className="p-6 flex-1 w-full">
            <PatientInfo />
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Patients