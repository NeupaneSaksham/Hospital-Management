import { useState } from "react";
import ListTable from "../../components/list-table";
import DateFilter from "../../../doctor/components/appointment/date-filter";
import { SearchBar } from "../../../receptions/components/search/SearchBar";

export default function LabsResult() {
  const [searchTerm, setSearchTerm] = useState("");

  const labData = [
    { patientid: "10001", name: "Baburao G. Aapte", phone: "9812345678",age:"31", address:"Address", diagnosis: "Disease", date: "2019/2/14" ,doctor: "Dr.Hari"},
    { patientid: "10001", name: "Baburao G. Aapte", phone: "9812345678",age:"32", address:"Address", diagnosis: "Disease", date: "2019/2/14" ,doctor: "Dr.Pramesh"},
  ];

  const filteredData = labData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.patientid.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Results List</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2">
            <DateFilter/>
          </div>
          <div className="flex space-x-2">
            <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search..." />
          </div>
        </div>
        <ListTable data={filteredData} mode="result" />
      </div>
    </div>
  );
}