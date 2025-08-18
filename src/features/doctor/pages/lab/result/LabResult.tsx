import { useState } from "react";
import LabTable from "../../../components/labs/lab-table";
import DateFilter from "../../../components/appointment/date-filter";
import { SearchBar } from "../../../../receptions/components/search/SearchBar";
import { useNavigate } from "react-router-dom";

export default function LabResult() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const labData = [
    { id: "10001", name: "Baburao G. Aapte", phone: "9812345678", disease: "Disease", date: "2019/2/14", type: "IPD", time: "1 Hr", status: "Completed" },
    { id: "10001", name: "Baburao G. Aapte", phone: "9812345678", disease: "Disease", date: "2019/2/14", type: "Emergency", time: "1 Hr", status: "In Progress" },
  ];

  const filteredData = labData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b-2 border-[#0ABAB5] w-fit">Patient Info</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2">
            <DateFilter />
          </div>
          <div className="flex space-x-2">
            <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search..." />
          </div>
        </div>
        <LabTable
          data={filteredData}
          mode="result"
          onPatientClick={(item) => navigate(`/doctor/lab/result/${item.id}`)}
        />
      </div>
    </div>
  );
}