import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Icon } from "@iconify/react"

// Mock data matching the Figma design
const doctorsData = [
  {
    id: "D000",
    name: "Rebika Thapa",
    phone: "+91 12345 67890",
    department: "Pathology",
    designation: "Medical Officer (MO)",
  },
  {
    id: "D000",
    name: "Sanup Timsina",
    phone: "+91 12345 67890",
    department: "Hematologyt",
    designation: "Junior Resident Doctor",
  },
  {
    id: "D000",
    name: "Prajwal Thapa",
    phone: "+91 12345 67890",
    department: "Microbiology",
    designation: "Senior Resident Doctor",
  },
  {
    id: "D000",
    name: "Aaman Limbu",
    phone: "+91 12345 67890",
    department: "Radiology",
    designation: "Medical Officer (MO)",
  },
  {
    id: "D000",
    name: "Manoj Regmi",
    phone: "+91 12345 67890",
    department: "Pathology",
    designation: "Junior Resident Doctor",
  },
  {
    id: "D000",
    name: "Manish Rai",
    phone: "+91 12345 67890",
    department: "microbiology",
    designation: "Junior Resident Doctor",
  },
  {
    id: "D000",
    name: "Sujan Giri",
    phone: "+91 12345 67890",
    department: "Radiology",
    designation: "Junior Resident Doctor",
  },
]

export default function DoctorsPage() {
  return (
    <div className="flex flex-col h-full bg-gray-50/30">
      <div className="flex-1 p-6 space-y-6">
        {/* Section Title */}
        <div className="space-y-4">
          <h1 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b-2 border-[#0ABAB5] w-fit">
            Doctors
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
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-white border-[#969696] hover:bg-gray-50 text-[#969696] text-sm sm:text-base w-full sm:w-auto"
          >
            Filter
            <Icon icon="line-md:filter-filled" width="18" height="18" />
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[600px] text-sm sm:text-base">
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#242222]">ID</TableHead>
                <TableHead className="text-[#242222]">Doctor Name</TableHead>
                <TableHead className="text-[#242222]">Phone</TableHead>
                <TableHead className="text-[#242222]">Department</TableHead>
                <TableHead className="text-[#242222]">Designation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {doctorsData.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell className="text-[#525252] font-light">{doctor.id}</TableCell>
                  <TableCell className="text-[#525252] font-light">{doctor.name}</TableCell>
                  <TableCell className="text-[#525252] font-light">{doctor.phone}</TableCell>
                  <TableCell className="text-[#525252] font-light">{doctor.department}</TableCell>
                  <TableCell className="text-[#525252] font-light">{doctor.designation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-end pt-2">
          <Pagination>
            <PaginationContent className="gap-1 ">
              <PaginationItem>
                <PaginationPrevious href="#" className=" hover:text-[#0598A3] border-0 text-[#0598A3] " />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-[#0598A3] hover:bg-[#0598A3] text-white hover:text-white">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-[#0598A3] hover:text-[#0598A3] border-0 over:bg-transparent ">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-[#0598A3]   border-0 hover:text-[#0598A3]">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-[#0598A3]   border-0 hover:text-[#0598A3]">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="text-[#0598A3]  border-0 hover:text-[#0598A3]" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
