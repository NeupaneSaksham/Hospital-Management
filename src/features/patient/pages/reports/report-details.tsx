import BackButton from "@/features/receptions/components/buttons/BackButton"
import XrayForearmImg from "@/assets/report-image/xraydawg.jpeg"

export default function ReportDetails() {

  const report = {
    title: "X RAY FOREARM",
    view: "AP/LATERAL VIEW",
    findings: [
      "No evidence of fracture or periosteal reaction.",
      "No osteolytic or sclerotic lesions.",
      "Wrist and elbow joints are normal.",
      "No obvious soft tissue fullness is seen.",
    ],
    impression: "No abnormality detected.",
    image: XrayForearmImg,
    imageAlt: "X-ray forearm AP and Lateral views",
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-3">
      <div className="w-full max-w-6xl bg-white rounded shadow p-6">
        <div className="mb-4">
          <BackButton to="/patient/reports" />
        </div>
        <h2 className="text-center text-xl font-bold mb-6">{report.title}</h2>
        <div className="mb-4">
          <span className="font-bold">VIEW :</span> {report.view}
          <ul className="list-disc ml-8 mt-2 text-sm">
            {report.findings.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <span className="font-bold">IMPRESSION</span>
          <div className="italic text-gray-700 mt-1">{report.impression}</div>
        </div>
        <div className="flex justify-center">
          {report.image ? (
            <img
              src={report.image}
              alt={report.imageAlt}
              className="max-w-full max-h-96 border"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-100 text-gray-400 italic">
              {report.imageAlt}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}