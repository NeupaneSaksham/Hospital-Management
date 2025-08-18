import XrayForearmImg from "@/assets/report-image/xraydawg.jpeg"

type Report = {
  id: string;
  testName: string;
  category: string;
  date: string;
  notes: string;
};

export default function ViewImage({ report }: { report: Report }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-3">
      <div className="w-full max-w-6xl bg-white rounded shadow p-6">
        <h2 className="text-center text-xl font-bold mb-6">{report.testName}</h2>
        <div className="mb-4">
          <span className="font-bold">Category:</span> {report.category}
          <br />
          <span className="font-bold">Date:</span> {report.date}
          <br />
          <span className="font-bold">Notes:</span> {report.notes}
        </div>
        <div className="flex justify-center">
          <img
            src={XrayForearmImg}
            alt="X-ray"
            className="max-w-full max-h-96 border"
          />
        </div>
      </div>
    </div>
  )
}