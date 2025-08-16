interface RecordSectionProps {
  date: string;
  symptoms: string;
  labs: string[];
  medicines: string[];
}

export default function RecordSection({ date, symptoms, labs, medicines }: RecordSectionProps) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-2 text-left">{date} :</h4>
      <div className="border border-gray-200 rounded-lg p-4 text-left">
        <div className="space-y-4">
          <div>
            <span className="font-medium text-gray-900">Primary Symptoms : </span>
            <span className="text-gray-600">{symptoms}</span>
          </div>

          <div>
            <span className="font-medium text-gray-900">Lab :</span>
            <ul className="list-disc list-inside text-gray-600 mt-1 ml-4">
              {labs.map((lab, idx) => (
                <li key={idx}>{lab}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-medium text-gray-900">Medicine :</span>
            <ul className="list-disc list-inside text-gray-600 mt-1 ml-4">
              {medicines.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


