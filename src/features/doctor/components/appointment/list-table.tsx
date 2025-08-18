import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";

type Appointment = {
  id: string;
  name: string;
  phone: string;
  disease: string;
  date: string;
  type: string;
  status: string;
};

type AppointmentTableProps = {
  data: Appointment[];
};

export default function AppointmentTable({ data }: AppointmentTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>I.D.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Disease</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((appointment) => (
          <TableRow key={appointment.id + appointment.date}>
            <TableCell>{appointment.id}</TableCell>
            <TableCell>{appointment.name}</TableCell>
            <TableCell>{appointment.phone}</TableCell>
            <TableCell>{appointment.disease}</TableCell>
            <TableCell>{appointment.date}</TableCell>
            <TableCell>{appointment.type}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-white text-xs ${
                  appointment.status === "Completed"
                    ? "bg-green-500"
                    : appointment.status === "In Progress"
                    ? "bg-blue-500"
                    : "bg-red-500"
                }`}
              >
                {appointment.status}
              </span>
            </TableCell>
            <TableCell>
              <Button variant="ghost" size="icon">
                <EyeIcon className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}