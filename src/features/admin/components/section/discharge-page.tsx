import { Search, Calendar, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const dischargeData = [
  {
    id: "D000",
    patientName: "Bebika Thapa",
    gender: "Female",
    phoneNumber: "+91 12345 67890",
    doctorName: "Bebika Thapa",
    dischargeDate: "April 20, 2024 10:00 AM",
    status: "Cancelled",
  },
  {
    id: "D001",
    patientName: "Sanup Timsina",
    gender: "Male",
    phoneNumber: "+91 12345 67890",
    doctorName: "Sanup Timsina",
    dischargeDate: "April 20, 2024 10:00 AM",
    status: "Admitted",
  },
  {
    id: "D002",
    patientName: "Prajwal Thapa",
    gender: "Male",
    phoneNumber: "+91 12345 67890",
    doctorName: "Prajwal Thapa",
    dischargeDate: "April 20, 2024 10:00 AM",
    status: "Discharged",
  },
  {
    id: "D003",
    patientName: "Aaman Limbu",
    gender: "Male",
    phoneNumber: "+91 12345 67890",
    doctorName: "Aaman Limbu",
    dischargeDate: "April 20, 2024 10:00 AM",
    status: "Discharged",
  },
  {
    id: "D004",
    patientName: "Manoj Regmi",
    gender: "Male",
    phoneNumber: "+91 12345 67890",
    doctorName: "Manoj Regmi",
    dischargeDate: "April 20, 2024 10:00 AM",
    status: "Discharged",
  },
  {
    id: "D005",
    patientName: "Manish Rai",
    gender: "Male",
    phoneNumber: "+91 12345 67890",
    doctorName: "Manish Rai",
    dischargeDate: "April 20, 2024 10:00 AM",
    status: "Discharged",
  },
  {
    id: "D006",
    patientName: "Sujan Giri",
    gender: "Male",
    phoneNumber: "+91 12345 67890",
    doctorName: "Sujan Giri",
    dischargeDate: "April 20, 2024 10:00 AM",
    status: "Discharged",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Discharged":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{status}</Badge>
    case "Admitted":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{status}</Badge>
    case "Cancelled":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{status}</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function DischargePage() {
  return (
    <div className="flex flex-col h-full bg-gray-50/30">
      <div className="flex-1 p-6 space-y-6">
        {/* Section Title */}
        <div className="space-y-4">
          <h1 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b-2 border-[#0ABAB5] w-fit">
            Discharge
          </h1>
        </div>

        {/* Search and Filter Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#374957] h-4 w-4" />
            <Input
              placeholder="Search"
              className="pl-10 bg-[#EBF5FF] border-none rounded-2xl font-light text-sm sm:text-base"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white border-[#969696] hover:bg-gray-50 text-[#969696] text-sm sm:text-base w-full sm:w-auto"
            >
              <Calendar className="h-4 w-4" />
              Date
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white border-[#969696] hover:bg-gray-50 text-[#969696] text-sm sm:text-base w-full sm:w-auto"
            >
              Filter
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[600px] text-sm sm:text-base">
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#242222]">Discharge ID</TableHead>
                <TableHead className="text-[#242222]">Patient Name</TableHead>
                <TableHead className="text-[#242222]">Gender</TableHead>
                <TableHead className="text-[#242222]">Phone Number</TableHead>
                <TableHead className="text-[#242222]">Doctor Name</TableHead>
                <TableHead className="text-[#242222]">Discharge Date</TableHead>
                <TableHead className="text-[#242222]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dischargeData.map((discharge) => (
                <TableRow key={discharge.id}>
                  <TableCell className="text-[#525252] font-light">{discharge.id}</TableCell>
                  <TableCell className="text-[#525252] font-light">{discharge.patientName}</TableCell>
                  <TableCell className="text-[#525252] font-light">{discharge.gender}</TableCell>
                  <TableCell className="text-[#525252] font-light">{discharge.phoneNumber}</TableCell>
                  <TableCell className="text-[#525252] font-light">{discharge.doctorName}</TableCell>
                  <TableCell className="text-[#525252] font-light">{discharge.dischargeDate}</TableCell>
                  <TableCell>{getStatusBadge(discharge.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end pt-2">
          <Pagination>
            <PaginationContent className="gap-1">
              <PaginationItem>
                <PaginationPrevious href="#" className="hover:text-[#0598A3] border-0 text-[#0598A3]" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-[#0598A3] hover:bg-[#0598A3] text-white hover:text-white">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-[#0598A3] hover:text-[#0598A3] border-0 hover:bg-transparent">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-[#0598A3] border-0 hover:text-[#0598A3]">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-[#0598A3] border-0 hover:text-[#0598A3]">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="text-[#0598A3] border-0 hover:text-[#0598A3]" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}

// minor logic update 1854
