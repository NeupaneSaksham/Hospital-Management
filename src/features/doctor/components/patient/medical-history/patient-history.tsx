import HistoryData from './history-data';

interface MedicalHistoryProps {
  historyRecords: {
    date: string;
    primarySymptoms: string;
    labTests: string[];
    medicines: string[];
  }[];
}

export default function MedicalHistory({ historyRecords }: MedicalHistoryProps) {
  return (
    <div>
      {historyRecords.map((record, index) => (
        <HistoryData
          key={index}
          date={record.date}
          primarySymptoms={record.primarySymptoms}
          labTests={record.labTests}
          medicines={record.medicines}
        />
      ))}
    </div>
  );
}