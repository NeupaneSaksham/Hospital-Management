import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RequestBoard } from "../../components/request/request-board"
import { LabDetailsTable } from "../../components/request/details-table"
import { EditButton } from "../../components/request/edit-button"
import BackButton from "@/features/receptions/components/buttons/BackButton"

export default function EditAction() {

  const patientData = {
    patientId: "12223",
    patientName: "Baburao G. Aapte",
    contact: "981877164",
    doctorName: "Someone",
    age: "123",
    department: "Neurology",
  }

  const labTests = [
    {
      category: "X-Ray",
      testName: "Leg X-Ray",
      note: "Something Something",
      status: "Complete",
      statusColor: "bg-green-500",
    },
    {
      category: "X-Ray",
      testName: "Leg X-Ray",
      note: "Something Something",
      status: "Pending",
      statusColor: "bg-blue-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Card className="max-w-6xl mx-auto">
        <CardHeader className="flex flex-col space-y-2 pb-4">
           <BackButton to = '/lab/request' className="text-[#0ABAB5] mb-3"/>
          <div className="flex flex-row items-center justify-between w-full">
            <CardTitle className="text-xl font-semibold">Test Request</CardTitle>
            <EditButton
              href={`/lab/request/${patientData.patientId}/request-edit`}
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-4 border-gray-300 p-4 mb-8" >
            <RequestBoard patientData={patientData} />
          </div>
          <LabDetailsTable labTests={labTests} />
        </CardContent>
      </Card>
    </div>
  )
}
