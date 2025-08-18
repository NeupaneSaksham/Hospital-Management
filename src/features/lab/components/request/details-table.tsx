import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { RowActions } from "./request-action"

interface LabTest {
  category: string
  testName: string
  note: string
  status: string
  statusColor: string
}

interface LabDetailsTableProps {
  labTests: LabTest[]
  isEditable?: boolean
}

export function LabDetailsTable({ labTests, isEditable = false }: LabDetailsTableProps) {
  return (
    <div className="space-y-4 ">
      <h3 className="font-semibold text-base">Lab Details</h3>

      <Table >
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="font-semibold text-black">Category</TableHead>
            <TableHead className="font-semibold text-black">Test Name</TableHead>
            <TableHead className="font-semibold text-black">Note</TableHead>
            <TableHead className="font-semibold text-black">Status</TableHead>
            <TableHead className="font-semibold text-black">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {labTests.map((test, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{test.category}</TableCell>
              <TableCell>{test.testName}</TableCell>
              <TableCell>
                {isEditable ? <Input defaultValue={test.note} className="h-8 text-sm" /> : test.note}
              </TableCell>
              <TableCell>
                <Badge className={`${test.statusColor} text-white hover:${test.statusColor}`}>{test.status}</Badge>
              </TableCell>
              <TableCell>
                <RowActions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
