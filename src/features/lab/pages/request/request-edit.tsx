import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RequestBoard } from "../../components/request/request-board"
import { LabDetailsTable } from "../../components/request/details-table"
import { useNavigate } from "react-router-dom"


export default function RequestEdit() {
  const navigate = useNavigate()
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
    <div className="min-h-screen bg-gray-50 p-6 border-none">
      <Card className="max-w-6xl mx-auto border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-none">
          <CardTitle className="text-xl font-semibold">Test Request</CardTitle>
          <div className="flex space-x-2">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">Save</Button>
              <Button onClick={() => navigate(`/lab/request/${patientData.patientId}/editsection`)} className="bg-red-500 hover:bg-red-600 text-white">Cancel</Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 border-none">
          <div className="border-4 border-gray-300 p-4 mb-8" >
            <RequestBoard patientData={patientData} isEditable />
          </div>
          <LabDetailsTable labTests={labTests} isEditable />
        </CardContent>
      </Card>
    </div>
  )
}
