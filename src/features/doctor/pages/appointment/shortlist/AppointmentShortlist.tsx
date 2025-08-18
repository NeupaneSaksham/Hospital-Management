import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateFilter from "../../../components/appointment/date-filter";
import LeastTime from "../../../components/appointment/least-time";
import { SearchBar } from "../../../../receptions/components/search/SearchBar";
import AppointmentTable from "../../../components/appointment/list-table";
import { Button } from "@/components/ui/button";

export default function AppointmentShortList() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const appointmentData = [
    { id: "10001", name: "Baburao G. Aapte", phone: "9812345678", disease: "Disease", date: "2019/2/14", type: "OPD", status: "Completed" },
    { id: "10001", name: "Baburao G. Aapte", phone: "9812345678", disease: "Disease", date: "2019/2/14", type: "OPD", status: "In Progress" },
    { id: "10001", name: "Baburao G. Aapte", phone: "9812345678", disease: "Disease", date: "2019/2/14", type: "OPD", status: "Cancelled" },
  ];

  const filteredData = appointmentData.filter((appointment) =>
    appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b-2 border-[#0ABAB5] w-fit">
        Appointment Info
      </h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex bg-gray-100 rounded-md p-1">
            <Button
              variant="ghost"
              className={`rounded-md px-4 py-2 transition-all ${false ? "bg-[#0ABAB5] text-white shadow" : "text-gray-700"}`}
              onClick={() => navigate("/doctor/appointments/list")}
            >
              List
            </Button>
            <Button
              variant="default"
              className={`rounded-md px-4 py-2 transition-all bg-[#0ABAB5] text-white shadow`}
              onClick={() => navigate("/doctor/appointments/shortlist")}
            >
              Shortlist
            </Button>
          </div>
          <div className="flex space-x-2">
            <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search by ID or Name..." />
            <DateFilter />
            <LeastTime />
          </div>
        </div>
        <AppointmentTable data={filteredData} />
      </div>
    </div>
  );
}