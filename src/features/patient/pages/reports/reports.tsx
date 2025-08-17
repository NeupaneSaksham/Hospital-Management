import ReportsTable from "../../components/reports-table";
import { SearchBar } from "../../../receptions/components/search/SearchBar";
import DateFilter from "@/features/doctor/components/appointment/date-filter";
import DownloadButton from "@/features/doctor/components/patient/medical-history/download-button";

export default function Reports() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Patient Reports List</h1>
          <p className="text-sm text-gray-500">
            Record of All Patient Reports
          </p>
        </div>
        <div className="flex gap-2">
          <SearchBar
            placeholder="Search reports..."
            value=""
            onChange={() => {}}
          />
          <DateFilter />
          <DownloadButton />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <ReportsTable />
      </div>
    </div>
  );
}
