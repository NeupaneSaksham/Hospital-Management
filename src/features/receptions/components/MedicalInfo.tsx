import React from "react";

interface MedicalInfoProps {
  disease: string;
  consultationNotes: string[];
}

const MedicalInfo: React.FC<MedicalInfoProps> = ({ disease, consultationNotes }) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold text-gray-700 mb-3">MEDICAL INFORMATION</h2>
    <div className="border border-gray-300 p-4 bg-gray-50">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex">
            <span className="font-medium w-24">Diseases</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{disease}</span>
          </div>
        </div>
        <div>
          <div className="flex">
            <span className="font-medium w-32">Consultation Notes</span>
            <span className="mr-2">:</span>
          </div>
          <div className="mt-2 text-sm text-gray-600 space-y-1">
            {consultationNotes.map((note, idx) => (
              <div key={idx}>• {note}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MedicalInfo;
