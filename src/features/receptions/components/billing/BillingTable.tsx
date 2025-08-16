import { Table, TableBody, TableHeader, TableRow } from "../../../../components/ui/table";
import DataRow from "../tables/DataRow";

interface BillingTableProps {
  data?: Array<{
    sn?: string | number;
    content?: string;
    serviceCount?: number;
    section?: string;
    rate?: number;
    amount?: number;
  }>;
}

export function BillingTable({ data = [] }: BillingTableProps) {
  return (
    <div className="mb-6">
      <Table>
        <TableHeader>
          <TableRow>
            {["S.N", "Content", "Service Count", "Section", "Rate", "Amount"].map((h) => (
              <th key={h} className="border-r border-gray-300 text-gray-700">{h}</th>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <DataRow key={index} {...row} />
            ))
          ) : (
            <>
              <DataRow sn="1." />
              <DataRow sn="2." />
              <DataRow sn="3." />
              <DataRow sn="4." />
              <DataRow />
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
