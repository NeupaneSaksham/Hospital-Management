import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SearchBar } from "../../components/search/SearchBar"
import FilterButton from "../../components/buttons/FilterButton"
import TimeRangeButton from "../../components/buttons/TimeRangeButton"
import DownloadButton from "../../components/buttons/DownloadButton"

export default function DetailedBill() {
  return (
    <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Patient Payment List</h2>
            <p className="text-gray-500 text-sm">Record Of All Patient Payments</p>
          </div>
          <div className="flex items-center gap-3">
            <SearchBar value={""} onChange={() => {}} placeholder="Search" wrapperClassName="max-w-[16rem]" inputClassName="bg-blue-50 border-blue-100" />
            <FilterButton className="flex items-center gap-2 bg-transparent" />
            <TimeRangeButton className="flex items-center gap-2 bg-transparent" />
            <DownloadButton size="icon" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-gray-200">
              <TableHead className="text-gray-600 font-medium">SN</TableHead>
              <TableHead className="text-gray-600 font-medium">Date</TableHead>
              <TableHead className="text-gray-600 font-medium">Content</TableHead>
              <TableHead className="text-gray-600 font-medium">Service Count</TableHead>
              <TableHead className="text-gray-600 font-medium">Rate</TableHead>
              <TableHead className="text-gray-600 font-medium">Amount</TableHead>
              <TableHead className="text-gray-600 font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-gray-100">
              <TableCell className="text-gray-500">1</TableCell>
              <TableCell className="text-gray-700">2020-3-21</TableCell>
              <TableCell className="text-gray-700">Doctor Charge</TableCell>
              <TableCell className="text-gray-700">-</TableCell>
              <TableCell className="text-gray-700">Rs.500</TableCell>
              <TableCell className="text-gray-700">Rs.500</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50">
                  <Eye size={16} />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="border-gray-100">
              <TableCell className="text-gray-500">2</TableCell>
              <TableCell className="text-gray-700">2020-3-21</TableCell>
              <TableCell className="text-gray-700">Medicine</TableCell>
              <TableCell className="text-gray-700">-</TableCell>
              <TableCell className="text-gray-700">Rs.500</TableCell>
              <TableCell className="text-gray-700">Rs.500</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50">
                  <Eye size={16} />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="border-gray-100">
              <TableCell className="text-gray-500">3</TableCell>
              <TableCell className="text-gray-700">2020-3-21</TableCell>
              <TableCell className="text-gray-700">Due Cleared</TableCell>
              <TableCell className="text-gray-700">-</TableCell>
              <TableCell className="text-gray-700">Rs.2,000</TableCell>
              <TableCell className="text-gray-700">Rs.2,000</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50">
                  <Eye size={16} />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
  )
}