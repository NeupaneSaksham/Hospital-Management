import { useNavigate } from "react-router-dom";

interface Report {
  id: string; // Add id for navigation
  date: string;
  visitType: string;
  doctor: string;
  department: string;
  testname: string;
  category: string;
  price: number;
}

const reports: Report[] = [
  {
    id: "1",
    date: "2020-3-21",
    visitType: "IPD",
    doctor: "Dr. Suman",
    department: "Neurology",
    testname: "Chest X-ray",
    category: "X-ray",
    price: 100,
  },
  {
    id: "2",
    date: "2020-3-21",
    visitType: "IPD",
    doctor: "Dr. Suman",
    department: "Neurology",
    testname: "Chest X-ray",
    category: "X-ray",
    price: 100,
  },
  {
    id: "3",
    date: "2020-3-21",
    visitType: "IPD",
    doctor: "Dr. Suman",
    department: "Neurology",
    testname: "Chest X-ray",
    category: "X-ray",
    price: 100,
  },
];

export default function ReportsTable() {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Visit Type</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Doctor</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Department</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Test Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {reports.map((report) => (
            <tr
              key={report.id}
              className="cursor-pointer hover:bg-gray-100 transition"
              onClick={() => navigate(`/patient/reports/${report.id}`)}
            >
              <td className="px-6 py-4 text-sm text-gray-900">{report.date}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{report.visitType}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{report.doctor}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{report.department}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{report.testname}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{report.category}</td>
              <td className="px-6 py-4 text-sm text-gray-900">Rs. {report.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
