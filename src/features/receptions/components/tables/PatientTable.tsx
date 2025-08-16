import { Badge } from '../../../../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../components/ui/table';
import { ActionMenu } from '.././actionmenu/ActionMenu';
import type { Patient } from '../../types/patient';

interface PatientTableProps {
  patients: Patient[];
  onAction: {
    onEdit?: (id: number) => void;
    onPrint?: (id: number) => void;
    onVisit?: (id: number) => void;
    onBilling?: (id: number) => void;
    onMedical?: (id: number) => void;
    onDelete?: (id: number) => void;
  };
}

const tableHeaders = [
  'I.D',
  'Name',
  'Phone',
  'Doctor',
  'Disease',
  'Date',
  'Type',
  'Status',
  'Actions',
];

export function PatientTable({ patients, onAction }: PatientTableProps) {
  if (patients.length === 0) {
    return (
      <div className="py-4 px-6 text-center text-gray-600 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-400 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-6h6v6m2 0a2 2 0 002-2V9a2 2 0 00-2-2h-3.172a2 2 0 01-1.414-.586l-1.828-1.828A2 2 0 008.172 4H6a2 2 0 00-2 2v11a2 2 0 002 2h10z"
            />
          </svg>

          <p className="text-lg font-medium">
            Oops! No patients found with that name.
          </p>
          <p className="text-sm mt-1 text-gray-500">
            Try adjusting your search term or check your spelling.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              {tableHeaders.map((header) => (
                <TableHead key={header} className="font-semibold text-gray-700">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{patient.doctor}</TableCell>
                <TableCell>{patient.disease}</TableCell>
                <TableCell>{patient.appointment_date}</TableCell>
                <TableCell>{patient.appointement_type}</TableCell>
                <TableCell>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    {patient.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <ActionMenu
                    onEdit={() => onAction.onEdit?.(index)}
                    onPrint={() => onAction.onPrint?.(index)}
                    onVisit={() => onAction.onVisit?.(index)}
                    onBilling={() => onAction.onBilling?.(index)}
                    onMedical={() => onAction.onMedical?.(index)}
                    onDelete={() => onAction.onDelete?.(index)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
