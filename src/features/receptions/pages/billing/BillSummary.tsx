import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SearchBar } from "../../components/search/SearchBar";
import FilterButton from "../../components/buttons/FilterButton";
import TimeRangeButton from "../../components/buttons/TimeRangeButton";
import DownloadButton from "../../components/buttons/DownloadButton";

export default function BillSummary() {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">Patient Payment List</h2>
          <p className="text-gray-500 text-sm">Record Of All Patient Payments</p>
        </div>

        <div className="flex gap-3 items-center">
          <SearchBar value={""} onChange={() => {}} placeholder="Search" wrapperClassName="max-w-[16rem]" inputClassName="bg-blue-50 border-blue-100" />
          <FilterButton className="flex items-center gap-2 bg-transparent" />
          <TimeRangeButton className="flex items-center gap-2 bg-transparent" />
          <DownloadButton size="icon" />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-gray-200">
            <TableHead className="text-gray-600 font-medium">Bill Code</TableHead>
            <TableHead className="text-gray-600 font-medium">Date</TableHead>
            <TableHead className="text-gray-600 font-medium">Total Amount</TableHead>
            <TableHead className="text-gray-600 font-medium">Deposit Amount</TableHead>
            <TableHead className="text-gray-600 font-medium">Due Amount</TableHead>
            <TableHead className="text-gray-600 font-medium">Remaining Balance</TableHead>
            <TableHead className="text-gray-600 font-medium">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-gray-100">
            <TableCell className="text-gray-500">12221</TableCell>
            <TableCell className="text-gray-700">2020-3-21</TableCell>
            <TableCell className="text-gray-700">Rs.10,000</TableCell>
            <TableCell className="text-gray-700">Rs.10,000</TableCell>
            <TableCell className="text-red-500 font-medium">Rs.500</TableCell>
            <TableCell className="text-gray-700">Rs.0</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50">
                <Eye size={16} />
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className="border-gray-100">
            <TableCell className="text-gray-500">12221</TableCell>
            <TableCell className="text-gray-700">2020-3-21</TableCell>
            <TableCell className="text-gray-700">Rs.10,000</TableCell>
            <TableCell className="text-gray-700">Rs.10,000</TableCell>
            <TableCell className="text-red-500 font-medium">Rs.500</TableCell>
            <TableCell className="text-gray-700">Rs.0</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50">
                <Eye size={16} />
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className="border-gray-100">
            <TableCell className="text-gray-500">12221</TableCell>
            <TableCell className="text-gray-700">2020-3-21</TableCell>
            <TableCell className="text-gray-700">Rs.10,000</TableCell>
            <TableCell className="text-gray-700">Rs.10,000</TableCell>
            <TableCell className="text-red-500 font-medium">Rs.1,000</TableCell>
            <TableCell className="text-gray-700">Rs.0</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50">
                <Eye size={16} />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}


