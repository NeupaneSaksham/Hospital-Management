import { EyeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Billing {
    billid:number;
    date: string;
    visitType: string;
    doctor: string;
    department: string;
    totalamt: number;
  }
  
  const billing: Billing[] = [
    {
      billid:1,
      date: "2020-3-21",
      visitType: "IPD",
      doctor: "Dr. Suman",
      department: "Neurology",
      totalamt: 10000,
    },
    {
      billid:2,
      date: "2020-3-21",
      visitType: "IPD",
      doctor: "Dr. Suman",
      department: "Neurology",
      totalamt: 13000,
    },
    {
      billid:3,
      date: "2020-3-21",
      visitType: "IPD",
      doctor: "Dr. Suman",
      department: "Neurology",
      totalamt: 11000,
    },
  ];
  
  export default function BillingTable() {
    const navigate=useNavigate();
    return (
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Visit Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Doctor</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Department</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Total Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {billing.map((billing, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-900">{billing.date}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{billing.visitType}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{billing.doctor}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{billing.department}</td>
                <td className="px-6 py-4 text-sm text-gray-900">Rs. {billing.totalamt}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <EyeIcon size={16} onClick={() => {
                    navigate(`/patient/billing/${billing.billid}/billdetails`);
                  }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  