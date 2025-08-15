"use client"

import { Search, Filter, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"

// Mock pharmacy data
const pharmacyData = [
  {
    id: 1,
    medicine: "Aspirin",
    category: "Analgesic",
    quantity: 267,
    status: "In Stock",
    price: "$5.50",
    supplier: "Health Corp",
  },
  {
    id: 2,
    medicine: "Daina C",
    category: "Antihistamine",
    quantity: 0,
    status: "Out of Stock",
    price: "$67",
    supplier: "MediSupply Inc",
  },
  {
    id: 3,
    medicine: "wexy",
    category: "Antibiotic",
    quantity: 567,
    status: "In Stock",
    price: "$7.5",
    supplier: "Pharma Goods",
  },
  {
    id: 4,
    medicine: "asde",
    category: "Antidiabetic",
    quantity: 196,
    status: "In Stock",
    price: "$3.2",
    supplier: "Global Medics",
  },
  {
    id: 5,
    medicine: "guqs",
    category: "Antihypertensiv",
    quantity: 357,
    status: "In Stock",
    price: "$6.1",
    supplier: "Trusted Meds",
  },
  {
    id: 6,
    medicine: "Soml",
    category: "Lipid-lowering",
    quantity: 489,
    status: "In Stock",
    price: "$2.6",
    supplier: "Trusted Meds",
  },
  {
    id: 7,
    medicine: "Anut",
    category: "Antiopegti",
    quantity: 57,
    status: "In Stock",
    price: "$5.7",
    supplier: "Health Corp",
  },
]

export default function PharmacyPage() {
  return (
    <div className="flex flex-col h-full bg-gray-50/30">
      <div className="flex-1 p-6 space-y-6">
        {/* Section Title */}
        <div className="space-y-4">
          <h1 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b-2 border-[#0ABAB5] w-fit">
            Pharmacy
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
              className="flex items-center gap-2 bg-white border-[#969696] hover:bg-gray-50 text-[#969696] text-sm sm:text-base w-full sm:w-auto cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              Date
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white border-[#969696] hover:bg-gray-50 text-[#969696] text-sm sm:text-base w-full sm:w-auto cursor-pointer"
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
                <TableHead className="text-[#242222]">Medicine</TableHead>
                <TableHead className="text-[#242222]">Category</TableHead>
                <TableHead className="text-[#242222]">Quantity</TableHead>
                <TableHead className="text-[#242222]">Status</TableHead>
                <TableHead className="text-[#242222]">Price</TableHead>
                <TableHead className="text-[#242222]">Supplier</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pharmacyData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-[#525252] font-light">{item.medicine}</TableCell>
                  <TableCell className="text-[#525252] font-light">{item.category}</TableCell>
                  <TableCell className="text-[#525252] font-light">{item.quantity}</TableCell>
                  <TableCell>
                    <Badge
                      variant={item.status === "In Stock" ? "default" : "destructive"}
                      className={
                        item.status === "In Stock"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[#525252] font-light">{item.price}</TableCell>
                  <TableCell className="text-[#525252] font-light">{item.supplier}</TableCell>
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
