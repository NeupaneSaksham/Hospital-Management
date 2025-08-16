import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Edit, Printer, UserCheck } from "lucide-react";
import React from "react";

interface Appointment {
  id: string;
  name: string;
  phone: string;
  doctor: string;
  disease: string;
  date: string;
  type: string;
  status: string;
  age?: string;
}

interface AppointmentTableProps {
  data: Appointment[];
  activeTab?: "List" | "Shortlist";
  showActions?: boolean;
  onEdit?: (id: string) => void;
  onPrint?: (id: string) => void;
  onRefer?: (id: string) => void;
}

const AppointmentTable: React.FC<AppointmentTableProps> = ({ data, activeTab = "List", showActions = true, onEdit, onPrint, onRefer }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-t">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">I.D</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            {activeTab === "Shortlist" && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
            )}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disease</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            {activeTab === "List" && showActions && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((appointment, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appointment.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appointment.name}</td>
              {activeTab === "Shortlist" && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appointment.age}</td>
              )}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appointment.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appointment.doctor}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appointment.disease}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appointment.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appointment.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge className="bg-blue-500 hover:bg-blue-600 text-white">{appointment.status}</Badge>
              </td>
              {activeTab === "List" && showActions && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem className="flex items-center gap-2" onClick={() => onEdit?.(appointment.id)}>
                        <Edit className="h-4 w-4" />
                        Edit Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2" onClick={() => onPrint?.(appointment.id)}>
                        <Printer className="h-4 w-4" />
                        Print Report
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2" onClick={() => onRefer?.(appointment.id)}>
                        <UserCheck className="h-4 w-4" />
                        Refer to Doctor
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;
