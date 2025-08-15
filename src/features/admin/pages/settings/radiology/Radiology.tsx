

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Search, Calendar, Trash2, Plus, Edit, Trash } from "lucide-react"

interface RadiologyTest {
  id: string
  name: string
  category: string
  description: string
  price: string
}

const radiologyTests: RadiologyTest[] = [
  { 
    id: "1", 
    name: "Chest X-Ray (PA View)", 
    category: "X-Ray Chest (PA View)", 
    description: "Lungs, heart, infection, TB, pneumonia",
    price: "NPR 500" 
  },
  { 
    id: "2", 
    name: "Pelvic Ultrasound", 
    category: "Ultrasound (USG)", 
    description: "Uterus, ovaries, prostate, bladder",
    price: "NPR 500" 
  },
  { 
    id: "3", 
    name: "CT PNS (Sinuses)", 
    category: "CT Scan", 
    description: "Sinusitis, nasal polyps",
    price: "NPR 500" 
  },
  { 
    id: "4", 
    name: "MRI Brain", 
    category: "MRI (Magnetic Resonance Imaging)", 
    description: "Tumor, stroke, epilepsy, MS",
    price: "NPR 500" 
  },
  { 
    id: "5", 
    name: "CT Head / Brain", 
    category: "CT Scan", 
    description: "Fetal growth and condition",
    price: "NPR 500" 
  },
  { 
    id: "6", 
    name: "CT Scan Head (Plain)", 
    category: "CT Scan", 
    description: "Brain injury, stroke, etc.",
    price: "NPR 500" 
  },
  { 
    id: "7", 
    name: "CT Scan Chest (HRCT)", 
    category: "CT Scan", 
    description: "High-resolution lung scan",
    price: "NPR 500" 
  }
]

export default function Radiology() {
  const [selectedTests, setSelectedTests] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTests(radiologyTests.map((test) => test.id))
    } else {
      setSelectedTests([])
    }
  }

  const handleSelectTest = (testId: string, checked: boolean) => {
    if (checked) {
      setSelectedTests([...selectedTests, testId])
    } else {
      setSelectedTests(selectedTests.filter((id) => id !== testId))
    }
  }

  const filteredTests = radiologyTests.filter((test) =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col h-screen bg-gray-50/30">
      <div className="flex-1 p-4 space-y-4 overflow-auto">
        {/* Header with title, count, and action buttons in one container */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 border border-gray-200 rounded-md">
          <div className="flex flex-col">
            <h1 className="text-md font-medium text-gray-900 pb-1 border-b-2 border-[#0ABAB5] w-fit">
              Radiology
            </h1>
            <p className="text-sm text-gray-500 mt-1">Total no of List: {radiologyTests.length}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="destructive"
              size="sm"
              disabled={selectedTests.length === 0}
              className="bg-red-500 hover:bg-red-600 h-9"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>
            <Button size="sm" className="bg-[#0598A3] hover:bg-[#0598A3] text-white h-9">
              <Plus className="h-4 w-4 mr-1" />
              Add Category
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-1">
          <div className="border-none">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              <Button 
                variant="ghost"
                className="bg-white text-black rounded-lg border-none px-3 md:px-5 py-1 h-8 text-sm whitespace-nowrap"
              >
                Category
              </Button>
              <Button
                variant="ghost"
                className="bg-[#0ABAB5] text-white rounded-lg border-none px-3 md:px-5 py-1 h-8 text-sm whitespace-nowrap"
              >
                List
              </Button>
            </div>
          </div>
        </div>
        


        {/* Search and Filter Row */}
        <div className="flex flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#374957] h-3.5 w-3.5" />
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 h-9 bg-[#EBF5FF] border-none rounded-2xl font-light text-sm"
            />
          </div>
          <div>
            <Button
              variant="outline"
              className="flex items-center gap-1 h-9 bg-white border-[#969696] hover:bg-gray-50 text-[#969696] text-sm"
            >
              <Calendar className="h-3.5 w-3.5" />
              Filter by Date
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[600px] text-sm sm:text-base">
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 px-4">
                  <Checkbox
                    checked={selectedTests.length === radiologyTests.length}
                    onCheckedChange={handleSelectAll}
                    className="border-gray-300"
                  />
                </TableHead>
                <TableHead className="text-[#242222]">Test Name</TableHead>
                <TableHead className="text-[#242222]">Category</TableHead>
                <TableHead className="text-[#242222]">Description</TableHead>
                <TableHead className="text-[#242222]">Price</TableHead>
                <TableHead className="text-[#242222] text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTests.length > 0 ? (
                filteredTests.map((test) => (
                  <TableRow key={test.id}>
                    <TableCell className="px-4">
                      <Checkbox
                        checked={selectedTests.includes(test.id)}
                        onCheckedChange={(checked) => handleSelectTest(test.id, checked as boolean)}
                        className="border-gray-300"
                      />
                    </TableCell>
                    <TableCell className="text-[#525252] font-light text-sm">{test.name}</TableCell>
                    <TableCell className="text-[#525252] font-light text-sm">{test.category}</TableCell>
                    <TableCell className="text-[#525252] font-light text-sm">{test.description}</TableCell>
                    <TableCell className="text-[#525252] font-light text-sm">{test.price}</TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-gray-500 text-sm">
                    No tests found
                  </TableCell>
                </TableRow>
              )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end pb-2 mt-4">
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
                  <PaginationLink href="#" className="text-[#0598A3] hover:text-[#0598A3] border-0">
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