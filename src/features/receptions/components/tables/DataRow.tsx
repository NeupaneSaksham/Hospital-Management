import { TableCell, TableRow } from "../../../../components/ui/table";

interface DataRowProps {
  sn?: string | number;
  content?: string;
  serviceCount?: number;
  section?: string;
  rate?: number;
  amount?: number;
}

export default function DataRow({
  sn,
  content,
  serviceCount,
  section,
  rate,
  amount
}: DataRowProps) {
  return (
    <TableRow className="border-gray-300">
      <TableCell className="border-r border-gray-300 py-3">{sn}</TableCell>
      <TableCell className="border-r border-gray-300 py-3">{content}</TableCell>
      <TableCell className="border-r border-gray-300 py-3">{serviceCount}</TableCell>
      <TableCell className="border-r border-gray-300 py-3">{section}</TableCell>
      <TableCell className="border-r border-gray-300 py-3">{rate}</TableCell>
      <TableCell className="py-3">{amount}</TableCell>
    </TableRow>
  );
}
