import { useParams } from "react-router-dom";
import ViewImage from "@/features/doctor/components/patient/lab-report/view-image";
import BackButton from "@/features/receptions/components/buttons/BackButton";

const labData = [
  { id: "10001", testName: "Leg X-Ray", category: "X-Ray", date: "2019/2/14", notes: "The Bone..." },
  { id: "10002", testName: "Chest X-Ray", category: "X-Ray", date: "2019/2/15", notes: "Clear." },
  { id: "10003", testName: "Blood Test", category: "Lab", date: "2019/2/16", notes: "Normal." },
];

export default function RequestImage() {
  const { id } = useParams();
  const report = labData.find((r) => r.id === id);

  if (!report) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-lg text-gray-500">Report not found.</div>
      </div>
    );
  }

  return (
    <>
      <BackButton to="/doctor/lab/result" className="mt-10 mb-1 ml-16" />
      <ViewImage report={report} />
    </>
  );
}
// minor logic update 5064
