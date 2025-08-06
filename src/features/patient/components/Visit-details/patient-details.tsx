interface PatientDetailsProps {
  patientData: {
    userId: string
    name: string
    age: string
    password: string
    phone: string
    address: string
  }
}

export default function PatientDetailsSection({ patientData }: PatientDetailsProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">PATIENT DETAILS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">User Id</span>
            <span className="text-gray-600">: {patientData.userId}</span>
          </div>
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">Name</span>
            <span className="text-gray-600">: {patientData.name}</span>
          </div>
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">Age</span>
            <span className="text-gray-600">: {patientData.age}</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">Password</span>
            <span className="text-gray-600">: {patientData.password}</span>
          </div>
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">Phone</span>
            <span className="text-gray-600">: {patientData.phone}</span>
          </div>
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">Address</span>
            <span className="text-gray-600">: {patientData.address}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// minor logic update 4387
