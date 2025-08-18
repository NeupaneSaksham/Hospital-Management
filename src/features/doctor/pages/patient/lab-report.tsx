import LabTable from "../../components/patient/lab-report/lab-table";
import ViewImage from "../../components/patient/lab-report/view-image";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

type Report = {
  id: string;
  testName: string;
  category: string;
  date: string;
  notes: string;
};

export default function LabReport() {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const labData: Report[] = [
    { id: "10001", testName: "Leg X-Ray", category: "X-Ray", date: "2019/2/14", notes: "The Bone..." },
    { id: "10002", testName: "Chest X-Ray", category: "X-Ray", date: "2019/2/15", notes: "Clear." },
    { id: "10003", testName: "Blood Test", category: "Lab", date: "2019/2/16", notes: "Normal." },
  ];

  return (
    <div className="p-4 sm:p-6 flex flex-col gap-4 min-h-screen bg-white">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center mb-4">
            {selectedReport && (
              <button
                onClick={() => setSelectedReport(null)}
                className="mr-2 p-1 rounded hover:bg-gray-200"
                aria-label="Back"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <h2 className="text-xl font-semibold text-gray-900">Report Lists</h2>
          </div>
          {!selectedReport ? (
            <LabTable data={labData} onView={setSelectedReport} />
          ) : (
            <ViewImage report={selectedReport} />
          )}
        </div>
      </div>
    </div>
  );
}