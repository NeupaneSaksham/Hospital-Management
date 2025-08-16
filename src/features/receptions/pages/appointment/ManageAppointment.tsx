import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { SearchBar } from "../../components/search/SearchBar";
import { DateFilter } from "../../components/forms/DateFilter";
import AppointmentTable from "../../components/tables/AppointmentTable";

const appointments = [
  {
    id: "10001",
    name: "Baburao G. Aapte",
    phone: "9812345678",
    doctor: "Person",
    disease: "Disease",
    date: "2019/2/14",
    type: "OPD",
    status: "In Progress",
  },
  {
    id: "10001",
    name: "Baburao G. Aapte",
    phone: "9812345678",
    doctor: "Person",
    disease: "Disease",
    date: "2019/2/14",
    type: "IPD",
    status: "In Progress",
  },
  {
    id: "10001",
    name: "Baburao G. Aapte",
    phone: "9812345678",
    doctor: "Person",
    disease: "Disease",
    date: "2019/2/14",
    type: "Emergency",
    status: "In Progress",
  },
];

export default function ManageAppointment() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // Filtering logic can be added here if needed

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Appointment Info</h1>
        </div>

        {/* Controls */}
        <div className="p-6 flex items-center justify-between gap-4">
          <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search appointments..." />
          <DateFilter />
          <Button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white">
            Least Time
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Table */}
        <AppointmentTable data={appointments} activeTab="List" showActions />
      </div>
    </div>
  );
}
