import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";

type Report = {
  id: string;
  testName: string;
  category: string;
  date: string;
  notes: string;
};

type LabTableProps = {
  data: Report[];
  onView: (report: Report) => void;
};

export default function LabTable({ data, onView }: LabTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>I.D.</TableHead>
          <TableHead>Test Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Notes</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((report) => (
          <TableRow key={report.id + report.date}>
            <TableCell>{report.id}</TableCell>
            <TableCell>{report.testName}</TableCell>
            <TableCell>{report.category}</TableCell>
            <TableCell>{report.date}</TableCell>
            <TableCell>{report.notes}</TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onView(report)}
              >
                <EyeIcon className="h-4 w-4 text-[#31BBF2]" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}