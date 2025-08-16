import { Badge } from '../../../../components/ui/badge';
import type { Visit } from '../../types/visit';

interface VisitsTableProps {
  visits: Visit[];
}

export default function VisitsTable({ visits }: VisitsTableProps) {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-gray-900">
                Date
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-gray-900">
                Visit Type
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-gray-900">
                Doctor
              </th>
              <th className="hidden md:table-cell px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-gray-900">
                Department
              </th>
              <th className="hidden md:table-cell px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-gray-900">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {visits.map((visit, index) => (
              <tr
                key={index}
                className={index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">
                  {visit.date}
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-600">
                  <Badge
                    className={
                      visit.visitType === 'IPD'
                        ? 'bg-purple-100 text-purple-800'
                        : visit.visitType === 'OPD'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }
                  >
                    {visit.visitType}
                  </Badge>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-600">
                  {visit.doctor}
                </td>
                <td className="hidden md:table-cell px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-600">
                  {visit.department}
                </td>
                <td className="hidden md:table-cell px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-600">
                  {visit.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


