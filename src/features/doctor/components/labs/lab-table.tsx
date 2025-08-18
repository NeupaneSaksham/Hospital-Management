import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileArchive } from "lucide-react";

type LabItem = {
  id: string;
  name: string;
  phone: string;
  disease: string;
  date: string;
  type: string;
  time: string;
  status: string;
};

type LabTableProps = {
  data: LabItem[];
  mode: "request" | "result";
  onPatientClick?: (item: LabItem) => void;
};

export default function LabTable({ data, mode, onPatientClick }: LabTableProps) {
  function onView(item: LabItem) {
    if (onPatientClick) onPatientClick(item);
  }
  return (
    <Table>
      <TableHeader>
        <TableRow className="h-14">
          <TableHead className="px-6 py-4">I.D.</TableHead>
          <TableHead className="px-6 py-4">Name</TableHead>
          <TableHead className="px-6 py-4">Phone</TableHead>
          <TableHead className="px-6 py-4">Disease</TableHead>
          <TableHead className="px-6 py-4">Date</TableHead>
          <TableHead className="px-6 py-4">Type</TableHead>
          <TableHead className="px-6 py-4">Time</TableHead>
          {mode === "request" ? <TableHead className="px-6 py-4">Actions</TableHead> : <TableHead className="px-6 py-4">Status</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow
            key={item.id + item.date}
            className={mode === "result" ? "cursor-pointer hover:bg-gray-100 h-14" : "h-14"}
            onClick={mode === "result" ? () => onPatientClick && onPatientClick(item) : undefined}
          >
            <TableCell className="px-6 py-4">{item.id}</TableCell>
            <TableCell className="px-6 py-4">{item.name}</TableCell>
            <TableCell className="px-6 py-4">{item.phone}</TableCell>
            <TableCell className="px-6 py-4">{item.disease}</TableCell>
            <TableCell className="px-6 py-4">{item.date}</TableCell>
            <TableCell className="px-6 py-4">{item.type}</TableCell>
            <TableCell className="px-6 py-4">{item.time}</TableCell>
            {mode === "request" ? (
              <TableCell className="px-6 py-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    onView(item);
                  }}
                >
                  <FileArchive className="h-4 w-4" />
                </Button>
              </TableCell>
            ) : (
              <TableCell className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded-full text-white text-xs ${
                    item.status === "Completed"
                      ? "bg-green-500"
                      : item.status === "In Progress"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  }`}
                >
                  {item.status}
                </span>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}