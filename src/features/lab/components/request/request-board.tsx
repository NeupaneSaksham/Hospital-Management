import { Input } from "@/components/ui/input"

interface PatientData {
  patientId: string
  patientName: string
  contact: string
  doctorName: string
  age: string
  department: string
}

interface RequestBoardProps {
  patientData: PatientData
  isEditable?: boolean
}

export function RequestBoard({ patientData, isEditable = false }: RequestBoardProps) {
  if (isEditable) {
    return (
      <div className="grid grid-cols-3 gap-6 text-sm">
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-medium w-24">Patient Name</span>
            <span className="mr-2">:</span>
            <Input defaultValue={patientData.patientName} className="h-8 text-sm flex-1" />
          </div>
          <div className="flex items-center">
            <span className="font-medium w-24">Patient Id</span>
            <span className="mr-2">:</span>
            <Input defaultValue={patientData.patientId} className="h-8 text-sm flex-1" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-medium w-16">Contact</span>
            <span className="mr-2">:</span>
            <Input defaultValue={patientData.contact} className="h-8 text-sm flex-1" />
          </div>
          <div className="flex items-center">
            <span className="font-medium w-16">Age</span>
            <span className="mr-2">:</span>
            <Input defaultValue={patientData.age} className="h-8 text-sm flex-1" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-medium w-24">Doctor Name</span>
            <span className="mr-2">:</span>
            <Input defaultValue={patientData.doctorName} className="h-8 text-sm flex-1" />
          </div>
          <div className="flex items-center">
            <span className="font-medium w-24">Department</span>
            <span className="mr-2">:</span>
            <Input defaultValue={patientData.department} className="h-8 text-sm flex-1" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-6 text-sm">
      <div className="space-y-4">
        <div className="flex">
          <span className="font-medium w-24">Patient Id</span>
          <span className="mr-2">:</span>
          <span>{patientData.patientId}</span>
        </div>
        <div className="flex">
          <span className="font-medium w-24">Patient Name</span>
          <span className="mr-2">:</span>
          <span>{patientData.patientName}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex">
          <span className="font-medium w-16">Contact</span>
          <span className="mr-2">:</span>
          <span>{patientData.contact}</span>
        </div>
        <div className="flex">
          <span className="font-medium w-16">Age</span>
          <span className="mr-2">:</span>
          <span>{patientData.age}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex">
          <span className="font-medium w-24">Doctor Name</span>
          <span className="mr-2">:</span>
          <span>{patientData.doctorName}</span>
        </div>
        <div className="flex">
          <span className="font-medium w-24">Department</span>
          <span className="mr-2">:</span>
          <span>{patientData.department}</span>
        </div>
      </div>
    </div>
  )
}
