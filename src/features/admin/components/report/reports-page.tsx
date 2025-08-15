"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
// import { Download, Users, UserCheck, Stethoscope, UsersRound } from "lucide-react"
import { Icon } from "@iconify/react"

const statsData = [
  {
    title: "No. Of Departments",
    value: "1.6k",
    icon: "mingcute:department-line",
    color: "bg-red-500",
  },
  {
    title: "Total Patients",
    value: "1.6k",
    icon: "hugeicons:patient",
    color: "bg-green-500",
  },
  {
    title: "Avg Doctors Per Department",
    value: "1.6k",
    icon: "healthicons:doctor-24px",
    color: "bg-blue-500",
  },
  {
    title: "Avg Patients Per Department",
    value: "1.6k",
    icon: "lets-icons:group-fill",
    color: "bg-teal-500",
  },
]

const stocksData = [
  {
    sn: 1,
    medicineName: "Sinex",
    quantity: 10,
    price: "Rs.1200",
    manufacturedDate: "2026/3/4",
    unitsSold: 1,
    avgSalePerDay: 20,
  },
  {
    sn: 1,
    medicineName: "Sinex",
    quantity: 10,
    price: "Rs.1200",
    manufacturedDate: "2026/3/4",
    unitsSold: 1,
    avgSalePerDay: 20,
  },
]

const tabs = [
  { id: "financial", label: "Financial" },
  { id: "department", label: "Department" },
  { id: "stocks", label: "Stocks" },
]

export function ReportsPage() {
  const [activeTab, setActiveTab] = useState("stocks")

  return (
    <div className="flex flex-col h-full bg-gray-50/30">
      <div className="flex-1 p-6 space-y-6">
        {/* Section Title */}

        {/* Export Button */}
        <div className="flex justify-end">
          <Button className="bg-[#0598A3] hover:bg-[#0598A3] text-white">
            <Icon icon="mdi:download" className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="border-[#e5e7eb] rounded-none">
                <CardContent className="p-4 text-center">
                  <div className={`w-20 h-20 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon icon={IconComponent} className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xs font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={
                activeTab === tab.id 
                  ? "bg-[#0598A3] hover:bg-[#0598A3] text-white" 
                  : "text-[#969696] border-[#969696] hover:bg-gray-50"
              }
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content Area */}
        <div className="overflow-x-auto">
          {activeTab === "stocks" && (
            <div>
              <h3 className="text-md font-medium text-gray-900 mb-4">Stocks</h3>
              <Table className="w-full min-w-[600px] text-sm sm:text-base">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[#242222]">S.N</TableHead>
                    <TableHead className="text-[#242222]">Medicine Name</TableHead>
                    <TableHead className="text-[#242222]">Quantity</TableHead>
                    <TableHead className="text-[#242222]">Price</TableHead>
                    <TableHead className="text-[#242222]">Manufactured Date</TableHead>
                    <TableHead className="text-[#242222]">Units Sold</TableHead>
                    <TableHead className="text-[#242222]">Avg. Sale/Day</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stocksData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-[#525252] font-light">{item.sn}.</TableCell>
                      <TableCell className="text-[#525252] font-light">{item.medicineName}</TableCell>
                      <TableCell className="text-[#525252] font-light">{item.quantity}</TableCell>
                      <TableCell className="text-[#525252] font-light">{item.price}</TableCell>
                      <TableCell className="text-[#525252] font-light">{item.manufacturedDate}</TableCell>
                      <TableCell className="text-[#525252] font-light">{item.unitsSold}</TableCell>
                      <TableCell className="text-[#525252] font-light">{item.avgSalePerDay}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

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
          )}

          {activeTab === "financial" && (
            <div className="p-8 text-center text-gray-500">
              <p>Financial reports will be displayed here</p>
            </div>
          )}

          {activeTab === "department" && (
            <div className="p-8 text-center text-gray-500">
              <p>Department reports will be displayed here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
