import { useNavigate } from "react-router-dom";

interface Visit {
  id: string;
  date: string;
  visitType: string;
  doctor: string;
  department: string;
  notes: string;
}

const visits: Visit[] = [
  {
    id: "1",
    date: "2020-3-21",
    visitType: "IPD",
    doctor: "Dr. Suman",
    department: "Neurology",
    notes: "Blood Pressure Consistently Elevated",
  },
  {
    id: "2",
    date: "2020-3-21",
    visitType: "OPD",
    doctor: "Dr. Suman",
    department: "Neurology",
    notes: "Blood Pressure Consistently Elevated",
  },
  {
    id: "3",
    date: "2020-3-21",
    visitType: "IPD",
    doctor: "Dr. Suman",
    department: "Neurology",
    notes: "Blood Pressure Consistently Elevated",
  },
];

export default function VisitTable() {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Visit Type
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Doctor
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Department
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Notes
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {visits.map((visit) => (
            <tr
              key={visit.id}
              className="cursor-pointer hover:bg-gray-100 transition"
              onClick={() => navigate(`/patient/visit/${visit.id}`)}
            >
              <td className="px-6 py-4 text-sm text-gray-900">{visit.date}</td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {visit.visitType}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{visit.doctor}</td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {visit.department}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{visit.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
