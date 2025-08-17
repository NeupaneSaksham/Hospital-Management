interface MedicalInfoProps {
  medicalData: {
    diseases: string
    consultationNotes: string[]
  }
}

export default function MedicalInfoSection({ medicalData }: MedicalInfoProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">MEDICAL INFORMATION</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex">
            <span className="font-medium text-gray-700 w-24">Diseases</span>
            <span className="text-gray-600">: {medicalData.diseases}</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <span className="font-medium text-gray-700 mb-2">Consultation Notes :</span>
            <ul className="text-gray-600 text-sm space-y-1 ml-4">
              {medicalData.consultationNotes.map((note, index) => (
                <li key={index} className="list-disc">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
