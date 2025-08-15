"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Calendar, Trash2, Plus, Eye, Edit, Trash } from "lucide-react"

interface StaffMember {
  id: string
  name: string
  age: number
  email: string
  phone: string
  position: string
  workingHours: string
  avatar?: string
}

const staffData: StaffMember[] = [
  {
    id: "1",
    name: "Baburao G. Aapte",
    age: 32,
    email: "Babur@Gmail.Com",
    phone: "9812345678",
    position: "Doctor",
    workingHours: "12:00 AM - 12:00 PM",
  },
  {
    id: "2",
    name: "Baburao G. Aapte",
    age: 32,
    email: "Babur@Gmail.Com",
    phone: "9812345678",
    position: "Reception",
    workingHours: "12:00 AM - 12:00 PM",
  },
  {
    id: "3",
    name: "Rajesh Kumar",
    age: 28,
    email: "rajesh@gmail.com",
    phone: "9876543210",
    position: "Nurse",
    workingHours: "8:00 AM - 8:00 PM",
  },
  {
    id: "4",
    name: "Priya Sharma",
    age: 35,
    email: "priya@gmail.com",
    phone: "9123456789",
    position: "Lab Technician",
    workingHours: "9:00 AM - 6:00 PM",
  },
  {
    id: "5",
    name: "Amit Patel",
    age: 29,
    email: "amit@gmail.com",
    phone: "9234567890",
    position: "Pharmacist",
    workingHours: "10:00 AM - 7:00 PM",
  },
]

export function StaffList() {
  const [selectedStaff, setSelectedStaff] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedStaff(staffData.map((staff) => staff.id))
    } else {
      setSelectedStaff([])
    }
  }

  const handleSelectStaff = (staffId: string, checked: boolean) => {
    if (checked) {
      setSelectedStaff([...selectedStaff, staffId])
    } else {
      setSelectedStaff(selectedStaff.filter((id) => id !== staffId))
    }
  }

  const filteredStaff = staffData.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col h-full bg-gray-50/30">
      <div className="flex-1 p-6 space-y-6">
        {/* Section Title */}
        <div className="space-y-4">
          <h1 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b-2 border-[#0ABAB5] w-fit">
            Staff
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
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Button
            variant="destructive"
            size="sm"
            disabled={selectedStaff.length === 0}
            className="bg-red-500 hover:bg-red-600"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
          <Button size="sm" className="bg-[#0598A3] hover:bg-[#0598A3] text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Staff
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[600px] text-sm sm:text-base">
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 px-4">
                  <Checkbox
                    checked={selectedStaff.length === staffData.length}
                    onCheckedChange={handleSelectAll}
                    className="border-gray-300"
                  />
                </TableHead>
                <TableHead className="text-[#242222]">Name</TableHead>
                <TableHead className="text-[#242222]">Age</TableHead>
                <TableHead className="text-[#242222]">Email</TableHead>
                <TableHead className="text-[#242222]">Phone</TableHead>
                <TableHead className="text-[#242222]">Position</TableHead>
                <TableHead className="text-[#242222]">Working Hrs</TableHead>
                <TableHead className="text-[#242222] text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStaff.map((staff) => (
                <TableRow key={staff.id}>
                  <TableCell className="px-4">
                    <Checkbox
                      checked={selectedStaff.includes(staff.id)}
                      onCheckedChange={(checked) => handleSelectStaff(staff.id, checked as boolean)}
                      className="border-gray-300"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={staff.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                          {staff.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-[#525252] font-light">{staff.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-[#525252] font-light">{staff.age}</TableCell>
                  <TableCell className="text-[#525252] font-light">{staff.email}</TableCell>
                  <TableCell className="text-[#525252] font-light">{staff.phone}</TableCell>
                  <TableCell className="text-[#525252] font-light">{staff.position}</TableCell>
                  <TableCell className="text-[#525252] font-light">{staff.workingHours}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
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
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
