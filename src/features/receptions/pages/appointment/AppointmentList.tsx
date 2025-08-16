

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { SearchBar } from "../../components/search/SearchBar";
import { DateFilter } from "../../components/forms/DateFilter";
import AppointmentTable from "../../components/tables/AppointmentTable";

const appointmentData = [
  {
    id: "10001",
    name: "Baburao G. Aapte",
    phone: "9812345678",
    doctor: "Person",
    disease: "Disease",
    date: "2019/2/14",
    type: "OPD",
    status: "In Progress",
    age: "32",
  },
  {
    id: "10001",
    name: "Baburao G. Aapte",
    phone: "9812345678",
    doctor: "Person",
    disease: "Disease",
    date: "2019/2/14",
    type: "OPD",
    status: "In Progress",
    age: "32",
  },
  {
    id: "10001",
    name: "Baburao G. Aapte",
    phone: "9812345678",
    doctor: "Person",
    disease: "Disease",
    date: "2019/2/14",
    type: "OPD",
    status: "In Progress",
    age: "32",
  },
]

const shortlistData = [
  {
    id: "10001",
    name: "Baburao G. Aapte",
    age: "32",
    phone: "9812345678",
    doctor: "Person",
    disease: "Disease",
    date: "2019/2/14",
    type: "Checkup",
    status: "In Progress",
  },
]

export default function AppointmentInfo() {
  const [activeTab, setActiveTab] = useState("Shortlist");
  const [searchTerm, setSearchTerm] = useState("");
  // Filtering logic can be added here if needed

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm border">
        {/* Header */}
        <div className="px-6 py-4 border-b">
          <h1 className="text-xl font-medium text-gray-900">Appointment Info</h1>
          <div className="flex mt-4">
            <button
              onClick={() => setActiveTab("List")}
              className={`px-4 py-2 text-sm font-medium rounded-md mr-2 ${
                activeTab === "List" ? "bg-teal-500 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setActiveTab("Shortlist")}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "Shortlist" ? "bg-teal-500 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Shortlist
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="px-6 py-4 flex items-center justify-between gap-4">
          <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search appointments..." />
          <div className="flex items-center gap-3">
            <DateFilter />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-2">
                  Least Time
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Least Time</DropdownMenuItem>
                <DropdownMenuItem>Most Time</DropdownMenuItem>
                <DropdownMenuItem>Date</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Table */}
        <AppointmentTable
          data={activeTab === "List" ? appointmentData : shortlistData}
          activeTab={activeTab as any}
          showActions={activeTab === "List"}
        />
      </div>
    </div>
  );
}
