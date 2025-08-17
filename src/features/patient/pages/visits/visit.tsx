import VisitTable from "../../components/visit-table";
import { SearchBar } from "../../../receptions/components/search/SearchBar";
import DateFilter from "@/features/doctor/components/appointment/date-filter";
import DownloadButton from "@/features/doctor/components/patient/medical-history/download-button";

export default function Visit() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Doctor Visits</h1>
          <p className="text-sm text-gray-500">
            Record of All Patient Visits To The Clinic
          </p>
        </div>
        <div className="flex gap-2">
          <SearchBar
            placeholder="Search visits..."
            value=""
            onChange={() => {}}
          />
          <DateFilter />
          <DownloadButton />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <VisitTable />
      </div>
    </div>
  );
}
