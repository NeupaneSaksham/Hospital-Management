"use client"

import { useState } from "react"
import { Search, Filter, Calendar } from "lucide-react"
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

// Mock lab test data
const labTests = [
  {
    id: "101",
    testName: "Kidney Function Test (KFT)",
    description: "Urea, creatinine, electrolytes",
    price: "Rs.10000",
  },
  {
    id: "101",
    testName: "Kidney Function Test (KFT)",
    description: "Urea, creatinine, electrolytes",
    price: "Rs.10000",
  },
  {
    id: "101",
    testName: "Kidney Function Test (KFT)",
    description: "Urea, creatinine, electrolytes",
    price: "Rs.10000",
  },
  {
    id: "101",
    testName: "Kidney Function Test (KFT)",
    description: "Urea, creatinine, electrolytes",
    price: "Rs.10000",
  },
  {
    id: "101",
    testName: "Kidney Function Test (KFT)",
    description: "Urea, creatinine, electrolytes",
    price: "Rs.10000",
  },
  {
    id: "101",
    testName: "Kidney Function Test (KFT)",
    description: "Urea, creatinine, electrolytes",
    price: "Rs.10000",
  },
  {
    id: "101",
    testName: "Kidney Function Test (KFT)",
    description: "Urea, creatinine, electrolytes",
    price: "Rs.10000",
  },
]

export default function LabPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTests = labTests.filter(
    (test) =>
      test.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col h-full bg-gray-50/30">
      <div className="flex-1 p-6 space-y-6">
        {/* Section Title */}
        <div className="space-y-4">
          <h1 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b-2 border-[#0ABAB5] w-fit">
            Lab
          </h1>
        </div>

        {/* Search and Filter Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#374957] h-4 w-4" />
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
                <TableHead className="text-[#242222]">ID</TableHead>
                <TableHead className="text-[#242222]">Test Name</TableHead>
                <TableHead className="text-[#242222]">Description</TableHead>
                <TableHead className="text-[#242222]">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTests.map((test, index) => (
                <TableRow key={index}>
                  <TableCell className="text-[#525252] font-light">{test.id}</TableCell>
                  <TableCell className="text-[#525252] font-light">{test.testName}</TableCell>
                  <TableCell className="text-[#525252] font-light">{test.description}</TableCell>
                  <TableCell className="text-[#525252] font-light">{test.price}</TableCell>
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
