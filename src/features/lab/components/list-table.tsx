import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EyeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export type LabItem = {
  patientid: string;
  name: string;
  phone: string;
  age: string;
  address: string;
  diagnosis: string;
  date: string;
  doctor: string;
};

type ListTableProps = {
  data: LabItem[];
  mode: "request" | "result";
  onPatientClick?: (item: LabItem) => void;
};

export default function LabTable({ data, mode, onPatientClick }: ListTableProps) {
  const navigate = useNavigate();
  function onView(item: LabItem) {
    console.log("Viewing lab item:", item);
    if (mode === "request" && onPatientClick) {
      onPatientClick(item);
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Patient I.D.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Diagnosis</TableHead>
          <TableHead>Doctor</TableHead>
          {mode === "request" ? <TableHead>Actions</TableHead> : <TableHead>View</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.patientid + item.date}>
            <TableCell>{item.patientid}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.diagnosis}</TableCell>
            <TableCell>{item.doctor}</TableCell>
            {mode === "request" ? (
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    navigate(`/lab/request/${item.patientid}/editsection`);
                  }}
                >
                  <EyeIcon className="h-4 w-4" />
                </Button>
              </TableCell>
            ) : (
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onView(item)}
                >
                  <EyeIcon className="h-4 w-4" />
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}