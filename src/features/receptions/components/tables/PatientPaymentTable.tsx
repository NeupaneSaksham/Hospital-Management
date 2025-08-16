import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

export interface PatientPaymentItem {
  billCode: string;
  date: string;
  totalAmount: string;
  depositAmount: string;
  dueAmount: string;
  remainingBalance: string;
}

interface PatientPaymentTableProps {
  items: PatientPaymentItem[];
}

export default function PatientPaymentTable({ items }: PatientPaymentTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-gray-200">
          <TableHead className="text-gray-600 font-medium">Bill Code</TableHead>
          <TableHead className="text-gray-600 font-medium">Date</TableHead>
          <TableHead className="text-gray-600 font-medium">Total Amount</TableHead>
          <TableHead className="text-gray-600 font-medium">Deposit Amount</TableHead>
          <TableHead className="text-gray-600 font-medium">Due Amount</TableHead>
          <TableHead className="text-gray-600 font-medium">Remaining Balance</TableHead>
          <TableHead className="text-gray-600 font-medium">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, index) => (
          <TableRow key={index} className="border-gray-100">
            <TableCell className="text-gray-500">{item.billCode}</TableCell>
            <TableCell className="text-gray-700">{item.date}</TableCell>
            <TableCell className="text-gray-700">{item.totalAmount}</TableCell>
            <TableCell className="text-gray-700">{item.depositAmount}</TableCell>
            <TableCell className="text-red-500 font-medium">{item.dueAmount}</TableCell>
            <TableCell className="text-gray-700">{item.remainingBalance}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50">
                <Eye size={16} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}



