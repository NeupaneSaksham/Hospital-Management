interface HistoryDataProps {
  date: string;
  primarySymptoms: string;
  labTests: string[];
  medicines: string[];
}

export default function HistoryData({ date, primarySymptoms, labTests, medicines }: HistoryDataProps) {
  return (
    <div className="border rounded p-4 mb-4">
      <p className="font-bold">{date}</p>
      <p><strong>Primary Symptoms:</strong> {primarySymptoms}</p>
      <div>
        <strong>Lab:</strong>
        <ul className="list-disc ml-6">
          {labTests.map((test, index) => <li key={index}>{test}</li>)}
        </ul>
      </div>
      <div>
        <strong>Medicine:</strong>
        <ul className="list-disc ml-6">
          {medicines.map((med, index) => <li key={index}>{med}</li>)}
        </ul>
      </div>
    </div>
  );
}