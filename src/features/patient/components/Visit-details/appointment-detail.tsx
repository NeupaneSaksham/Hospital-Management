interface AppointmentDetailsProps {
  appointmentData: {
    date: string
    doctor: string
    type: string
    department: string
    room: string
  }
}

export default function AppointmentDetailsSection({ appointmentData }: AppointmentDetailsProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">APPOINTMENT DETAILS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">Date</span>
            <span className="text-gray-600">: {appointmentData.date}</span>
          </div>
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">Doctor</span>
            <span className="text-gray-600">: {appointmentData.doctor}</span>
          </div>
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">Type</span>
            <span className="text-gray-600">: {appointmentData.type}</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">Department</span>
            <span className="text-gray-600">: {appointmentData.department}</span>
          </div>
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">Room</span>
            <span className="text-gray-600">: {appointmentData.room}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
